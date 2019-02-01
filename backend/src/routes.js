const routes = require('express').Router()

const { UserController, SessionController, CardController } = require('./app/controllers')

const { auth } = require('./app/middlewares')

routes.post('/register', UserController.store)
routes.post('/login', SessionController.store)

routes.use(auth)

routes.get('/account', UserController.index)
routes.post('/carts', CardController.store)
routes.get('/carts', CardController.index)
routes.get('/carts/:id', CardController.show)
routes.delete('/carts/:id', CardController.destroy)
routes.put('/carts/:id', CardController.update)

module.exports = routes