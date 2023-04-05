'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    queryInterface.bulkInsert('Users', [
      {
          "username": "asd",
          "email": "wqe",
          "password": "eqwe",
          "role": "admin",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "username": "dsa",
          "email": "ew",
          "password": "weqw",
          "role": "user",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "username": "qwe",
          "email": "we",
          "password": "eqwe",
          "role": "user",
          "createdAt": new Date(),
          "updatedAt": new Date()
      }
  ], {});
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
