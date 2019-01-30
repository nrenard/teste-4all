const routes = require('express').Router()

const { UserController, SessionController } = require('./app/controllers')

const { auth } = require('./app/middlewares')

routes.post('/register', UserController.store)
routes.post('/login', SessionController.store)

routes.use(auth)

routes.get('/private', (req, res) => res.send('aaeeeoo'))

module.exports = routes