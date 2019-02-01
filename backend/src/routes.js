const routes = require('express').Router()

const { UserController, SessionController, CardController } = require('./app/controllers')

const { auth } = require('./app/middlewares')

routes.post('/register', UserController.store)
routes.post('/login', SessionController.store)

routes.use(auth)

routes.get('/account', UserController.index)
routes.post('/cards', CardController.store)
routes.get('/cards', CardController.index)
routes.get('/cards/:id', CardController.show)
routes.delete('/cards/:id', CardController.destroy)
routes.put('/cards/:id', CardController.update)

module.exports = routes