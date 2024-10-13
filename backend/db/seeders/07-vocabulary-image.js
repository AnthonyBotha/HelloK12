'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'VocabularyImages';
    await queryInterface.bulkInsert(options,[
      {
        imgUrl: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1728774135/apple_ahqg1i.png",
        vocabularyId:1
      },
      {
        imgUrl: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1728774135/boy_dvnezy.png",
        vocabularyId:2
      },
      {
        imgUrl: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1728774135/dog_tgy8td.png",
        vocabularyId:3
      }
    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
  options.tableName = 'VocabularyImages';
  const Op = Sequelize.Op;
  await queryInterface.bulkDelete(options, {
    imgUrl: { [Op.in]: ["https://res.cloudinary.com/dmg8yuivs/image/upload/v1728774135/apple_ahqg1i.png","https://res.cloudinary.com/dmg8yuivs/image/upload/v1728774135/boy_dvnezy.png","https://res.cloudinary.com/dmg8yuivs/image/upload/v1728774135/dog_tgy8td.png"] }
  }, {});

}
};