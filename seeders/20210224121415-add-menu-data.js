'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * 
    */
   let data = [
     {
       name: 'nasi goreng',
       price: 12000,
       imgUrl: 'nasigorengenak',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      name: 'mie goreng',
      price: 12000,
      imgUrl: 'miegorengenak',
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ]
   return queryInterface.bulkInsert('Menus', data, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Menus', null, {})
  }
};
