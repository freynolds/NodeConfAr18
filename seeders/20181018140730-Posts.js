'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [{
      user_id: 1,
      text: "Este es el post numero 1",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 1,
      text: "Este es el post numero 2",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 1,
      text: "Este es el post numero 3",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
