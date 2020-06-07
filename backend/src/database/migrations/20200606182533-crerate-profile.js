'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('roles', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      role: {
        type: Sequelize.ENUM('ADMIN', 'LAWYER', 'CLIENT', 'USER'),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
     });
    
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('roles');
    
  }
};
