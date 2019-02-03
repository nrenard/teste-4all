module.exports = (sequelize, DataTypes) => {
  const Contacts = sequelize.define('Contacts')

  Contacts.associate = models => {
    Contacts.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_id'
    })
    Contacts.belongsTo(models.User, {
      as: 'contact',
      foreignKey: 'contact_id'
    })
  }

  return Contacts
}
