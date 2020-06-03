'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('processes', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        processNumber: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: true,
          isNumeric: true,
          isInt: true
        },
        cpfClient: {
          type: Sequelize.STRING(11),
          allowNull: false,
        },
      });
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('processes');

  }
};
