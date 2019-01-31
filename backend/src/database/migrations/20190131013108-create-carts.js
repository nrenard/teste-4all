'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('carts', { 
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        holder: {
          allowNull: false,
          type: Sequelize.STRING
        },
        cvv: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        number: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        expiration: {
          allowNull: false,
          type: Sequelize.STRING
        },
        user_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: 'users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('carts');
  }
};
