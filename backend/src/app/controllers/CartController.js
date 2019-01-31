const { Cart } = require('../models');

class CartController {
  async index (req, res) {
    try {
      const carts = await Cart.findAll({ where: { user_id: req.user.id } });
      return res.json(carts);
    } catch (err) {
      return res.json(err)
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
      const cart = await Cart.create({
        ...req.body,
        user_id: req.user.id
      })

      return res.json(cart)
    } catch (err) {
      return res.json(err)
    }
  }

  async destroy (req, res) {
    const { id } = req.params

    try {
      const carts = await Cart.destroy({ 
        where: { 
          id, 
          user_id: req.user.id 
        } 
      })

      return res.json({ carts_deteled: carts })
    } catch (err) {
      return res.json(err)
    }
  }
}

module.exports = new CartController