module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    number: DataTypes.STRING,
    cvv: DataTypes.INTEGER,
    holder: DataTypes.STRING,
    expiration: DataTypes.STRING,
  })

  Card.associate = models => {
    Card.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_id'
    })
  }

  return Card
}