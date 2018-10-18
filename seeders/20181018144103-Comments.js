'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [{
      user_id: 1,
      post_id: 1,
      text: "Comment #1",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 1,
      post_id: 1,
      text: "Comment #2",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 1,
      post_id: 2,
      text: "Comment #3",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 1,
      post_id: 3,
      text: "Comment #4",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
