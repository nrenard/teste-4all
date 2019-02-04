const { Transaction, User } = require('../models')
const { Op } = require('sequelize')

class TransationsController {
  async index (req, res) {
    try {
      const transactions = await Transaction.findAll({
        include: [{
          model: User, as: 'receiver',
          attributes: ['email', 'id']
        },{
          model: User, as: 'user',
          attributes: ['email', 'id']
        }],

        order: [
          ['created_at', 'DESC'],
        ],

        attributes: ['id', 'value', 'created_at' ],

        where: {
          [Op.or]: [{ user_id: req.userId }, { receiver_id: req.userId }]
        }
      })

      return res.json(transactions)
    } catch (err) {
      return res.json({ error: "Erro ao tentar buscar as transações." })
    }
  }

  async store (req, res) {
    const { receiver_id, value } = req.body

    const twoMinutesMiliseconds = 1000 * 120

    const timeNow = new Date();
    const timePast = new Date(timeNow - twoMinutesMiliseconds)

    try {
      const transactionExists = await Transaction.destroy({
        where: {
          user_id: req.userId,
          value,
          receiver_id,
          created_at: {
            [Op.between]: [
              timePast,
              timeNow
            ]
          },
        }
      })

      const receiver = await User.findOne({ where: { id: receiver_id } })

      if (!receiver) {
        return res.json({ error: "Receptor inexistente." })
      }

      let { amount } = await User.findOne({
        attributes: ['amount'],
        where: { id: req.userId }
      })

      const transaction = await Transaction.create({
        value,
        user_id: req.userId,
        receiver_id
      })

      if (transactionExists === 0) {
        amount = amount - value > 0 ? amount - value : 0;

        await User.update(
          { amount: receiver.amount + value },
          { where: { id: receiver_id } },
        )

        await User.update(
          { amount },
          { where: { id: req.userId } },
        )
      }

      return res.json({ transaction: transaction.id, amount })
    } catch (err) {
      return res.json({ error: "Erro ao tentar fazer uma transferências." })
    }
  }
}

module.exports = new TransationsController
