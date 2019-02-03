module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    value: DataTypes.INTEGER,
  })

  Transaction.associate = models => {
    Transaction.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_id'
    })
    Transaction.belongsTo(models.User, {
      as: 'receiver',
      foreignKey: 'receiver_id'
    })
  }

  return Transaction
}
