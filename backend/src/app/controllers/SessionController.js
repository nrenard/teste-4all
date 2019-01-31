const { User } = require('../models')

class SessionController {
  async store (req, res) {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })
    
    if (!user) {
      return res.json({ error: 'Usuário não encontrado.' })
    }

    if (!(await user.checkPassword(password))) {
      return res.json({ error: 'Senha incorreta.' })
    }

    return res.json({ 
      user: { 
        name: user.name, 
        email: user.email,
        amount: user.amount
      }, 
      token: user.generateToken(user) 
    })
  }
}

module.exports = new SessionController