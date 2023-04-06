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
   return queryInterface.bulkInsert('Posts', [
    {
        "title": "ini post",
        "content": "lorem",
        "imgUrl": "-",
        "userId": 3,
        "createdAt": new Date(),
        "updatedAt": new Date()
    },
    {
        "title": "ini juga",
        "content": "ipsum",
        "imgUrl": "-",
        "userId": 2,
        "createdAt": new Date(),
        "updatedAt": new Date()
    },
    {
        "title": "kalo ini iya juga",
        "content": "dolor",
        "imgUrl": "-",
        "userId": 1,
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
     * await
     */
    return  queryInterface.bulkDelete('Posts', null, {});
  }
};
