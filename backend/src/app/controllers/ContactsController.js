const { Contacts, User } = require('../models')

class ContactsController {
  async index (req, res) {
    try {
      const contacts = await Contacts.findAll({
        include: [{
          model: User, as: 'contact',
          attributes: ['name', 'email', 'id']
        }],
        where: { user_id: req.userId }
      })
      return res.json(contacts)
    } catch (err) {
      return res.json({ error: "Erro ao tentar listar os contatos." })
    }
  }

  async store (req, res) {
    const { contact_id } = req.body

    try {
      const contact = await Contacts.create({ user_id: req.userId, contact_id })
      return res.json(contact)
    } catch (err) {
      console.log('err: ', err);
      return res.json({ error: "Erro ao tentar criar o contato." })
    }
  }

  async destroy (req, res) {
    const { id } = req.params

    try {
      const contacts = await Contacts.destroy({
        where: {
          id,
          user_id: req.userId
        }
      })

      return res.json({ contacts_deteled: contacts })
    } catch (err) {
      return res.json({ error: "Erro ao tentar deletar o contato." })
    }
  }
}

module.exports = new ContactsController
