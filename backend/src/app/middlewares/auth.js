const jwt = require('jsonwebtoken')
const { secret } = require('../../config/auth')

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' })
  }

  const [bearer, token] = authHeader.split(' ')

  if (!token) {
    return res.status(401).json({ error: 'Token mal formated.' })
  }

  try {
    const user = await jwt.verify(token, secret)
    req.user = user

    return next()
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' })
  }
}
