const routes = require('express').Router()

const { UserController, SessionController, CartController } = require('./app/controllers')

const { auth } = require('./app/middlewares')

routes.post('/register', UserController.store)
routes.post('/login', SessionController.store)

routes.use(auth)

routes.get('/account', UserController.index)
routes.post('/carts', CartController.store)
routes.get('/carts', CartController.index)
routes.delete('/carts/:id', CartController.destroy)

module.exports = routes