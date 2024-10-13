'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Units';
    await queryInterface.bulkInsert(options,[
      {
        title: "Spanish-Fruit",
        imgUrl: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1728773134/fruits_hfo62k.png",
        languageCourseId:1
      },
      {
        title: "English-Family",
        imgUrl: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1728773134/family_ngylgx.png",
        languageCourseId: 2
      },
      {
        title: "Spanish-Pets",
        imgUrl: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1728773134/pets_xg5ywy.png",
        languageCourseId: 3
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
  options.tableName = 'Units';
  const Op = Sequelize.Op;
  await queryInterface.bulkDelete(options, {
    imgUrl: { [Op.in]: ["https://res.cloudinary.com/dmg8yuivs/image/upload/v1728773134/fruits_hfo62k.png", "https://res.cloudinary.com/dmg8yuivs/image/upload/v1728773134/family_ngylgx.png", "https://res.cloudinary.com/dmg8yuivs/image/upload/v1728773134/family_ngylgx.png"] }
  }, {});

}
};