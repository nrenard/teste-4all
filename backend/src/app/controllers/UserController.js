const { User } = require('../models')
const { Op } = require('sequelize')

class UserController {

  async index (req, res) {
    try {
      const users = await User.findAll({
        attributes: ['id', 'name', 'email'],
        where: { id: { [Op.ne]: req.userId } }
      })
      return res.json(users)
    } catch (err) {
      return res.json({ error: "Ocorreu um erro." })
    }
  }

  async show (req, res) {
    try {
      const user = await User.findOne({
        attributes: ['id', 'name', 'email', 'amount' ],
        where: { id: req.userId }
      })

      return res.json(user)
    } catch (err) {
      return res.json({ error: "Ocorreu um erro." })
    }
  }

  async store (req, res) {
    const { email = "", name = "", password = "" } = req.body;

    if (name.length < 1) {
      return res.json({ error: 'Nome é necessário' })
    }

    if (email.length < 1) {
      return res.json({ error: 'Email é necessário' })
    }

    const userFind = await User.findOne({ where: { email } })

    if (userFind) {
      return res.json({ error: 'Usuário ja existe' })
    }

    if (password.length < 6) {
      return res.json({ error: 'Senha precisa ter no mínimo 6 caracteres' })
    }

    try {
      const user = await User.create({ ...req.body, amount: 0 })
      return res.json(user)
    } catch (err) {
      return res.json({ error: "Ocorreu um erro ao tentar criar um usuário." })
    }
  }
}

module.exports = new UserController
