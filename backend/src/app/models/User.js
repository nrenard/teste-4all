const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { secret, expiresIn } = require('../../config/auth')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    password: DataTypes.VIRTUAL,
    password_hash: DataTypes.STRING
  },
  {
    hooks: {
      beforeSave: async user => {
        if (user.password) {
          user.password_hash = await bcrypt.hash(user.password, 8)
        }
      }
    }
  })

  User.prototype.checkPassword = async function (password) {
    return await bcrypt.compare(password, this.password_hash)
  }
  
  User.prototype.generateToken = function ({ id, name, email, amount }) {
    return jwt.sign({ id, name, email, amount }, secret, { expiresIn })
  }

  return User
}