const { Card } = require('../models');

class CardController {
  async index (req, res) {
    try {
      const cards = await Card.findAll({ where: { user_id: req.userId } });
      return res.json(cards);
    } catch (err) {
      return res.json({ error: "Erro ao tentar buscar os cartões." })
    }
  }

  async show (req, res) {
    const { id } = req.params

    try {
      const card = await Card.findOne({ where: { id, user_id: req.userId } })

      if (!card) {
        return res.json({ error: 'Cartão não encontrado.' })
      }

      return res.json(cart)
    } catch (err) {
      return res.json({ error: "Erro ao tentar mostrar o cartão." })
    }
  }

  async store (req, res) {
    const {
      number,
      cvv,
      holder = "",
      expiration
    } = req.body;

    if (!number) {
      return res.json({ error: 'Número é necessário' })
    }

    if (!cvv) {
      return res.json({ error: 'Cvv é necessário' })
    }

    if (!holder) {
      return res.json({ error: 'Titular é necessário' })
    }

    if (!expiration) {
      return res.json({ error: 'Data de expiração é necessário' })
    }

    try {
      const card = await Card.create({
        ...req.body,
        user_id: req.userId
      })

      return res.json(card)
    } catch (err) {
      return res.json({ error: "Erro ao tentar adicionar o cartão." })
    }
  }

  async destroy (req, res) {
    const { id } = req.params

    try {
      const cards = await Card.destroy({
        where: {
          id,
          user_id: req.userId
        }
      })

      return res.json({ cards_deteled: cards })
    } catch (err) {
      return res.json({ error: "Erro ao tentar deletar o cartão." })
    }
  }

  async update (req, res) {
    const { id } = req.params

    try {
      const card = await Card.update(
        req.body,
        { where: { id, user_id: req.userId } }
      )

      return res.json(card)
    } catch (err) {
      return res.json({ error: "Erro ao tentar atualizar o cartão." })
    }
  }
}

module.exports = new CardController
