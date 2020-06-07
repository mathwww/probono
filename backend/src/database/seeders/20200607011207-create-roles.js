'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('roles', [{
        role: 'USER',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        role: 'CLIENT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'LAWYER',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('roles', [{
        role: 'USER',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        role: 'CLIENT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'LAWYER',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  }
};
