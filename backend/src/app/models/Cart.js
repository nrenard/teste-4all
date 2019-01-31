module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    number: DataTypes.STRING,
    cvv: DataTypes.STRING,
    holder: DataTypes.STRING,
    expiration: DataTypes.STRING,
  })

  Cart.associate = models => {
    Cart.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_id'
    })
  }

  return Cart
}