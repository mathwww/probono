'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.sequelize.transaction((t) => {
          return Promise.all([
              queryInterface.addColumn('users', 'password', {
                  type: Sequelize.STRING,
                  allowNull: false
              }, { transaction: t }),
              queryInterface.addColumn('users', 'roleId', {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                  model: 'roles',
                  key: 'id',
                  onUpdate: 'CASCADE',
                  onDelete: 'CASCADE'
                }
              }, { transaction: t })
          ])
      })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.sequelize.transaction((t) => {
          return Promise.all([
              queryInterface.removeColumn('users', 'password', { transaction: t }),
              queryInterface.removeColumn('users', 'roleId', { transaction: t })
          ])
      })
  }
};
