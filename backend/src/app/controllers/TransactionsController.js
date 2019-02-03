const { Transaction, User } = require('../models')

class TransationsController {
  async index (req, res) {
    try {
      const transactions = await Transaction.findAll({
        include: [{
          model: User, as: 'receiver',
          attributes: ['email']
        }],
        attributes: ['id', 'receiver_id', 'value', 'created_at' ],
        where: {
          user_id: req.userId,
        }
      })

      return res.json(transactions)
    } catch (err) {
      return res.json({ error: "Erro ao tentar buscar as transações." })
    }
  }

  async store (req, res) {
    const { receiver_id, value } = req.body

    try {
      const receiver = await User.findOne({ where: { id: receiver_id } })
      const { amount  } = await User.findOne({
        attributes: ['amount'],
        where: { id: req.userId }
      })

      if (!receiver) {
        return res.json({ error: "Receptor inexistente." })
      }

      const transaction = await Transaction.create({
        value,
        user_id: req.userId,
        receiver_id
      })

      await User.update(
        { amount : amount - value > 0 ? amount - value : 0 },
        { where: { id: req.userId } },
      )

      await User.update(
        { amount: receiver.amount + value },
        { where: { id: receiver_id } },
      )

      return res.json(transaction)
    } catch (err) {
      return res.json({ error: "Erro ao tentar fazer uma transferências." })
    }
  }
}

module.exports = new TransationsController
