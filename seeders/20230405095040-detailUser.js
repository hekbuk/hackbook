'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await 
    */
   return queryInterface.bulkInsert('DetailUsers', [
    {
        "firstName": "Bhagas",
        "lastName": "Nin",
        "gender": "M",
        "imageUrl": "-",
        "Username": "asd",
        "createdAt": new Date(),
        "updatedAt": new Date()
    },
    {
        "firstName": "Nando",
        "lastName": "Naing",
        "gender": "M",
        "imageUrl": "-",
        "Username": "dsa",
        "createdAt": new Date(),
        "updatedAt": new Date()
    },
    {
        "firstName": "Ayu",
        "lastName": "Haps",
        "gender": "F",
        "imageUrl": "-",
        "Username": "qwe",
        "createdAt": new Date(),
        "updatedAt": new Date()
    }
], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('DetailUsers', null, {});
  }
};
