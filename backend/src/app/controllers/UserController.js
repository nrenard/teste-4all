const { User } = require('../models')

class UserController {
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

    const user = await User.create(req.body)

    return res.json(user)
  }
}

module.exports = new UserController