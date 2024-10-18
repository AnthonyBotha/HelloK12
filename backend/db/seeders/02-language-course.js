'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'LanguageCourses';
    await queryInterface.bulkInsert(options, [
      { language: 'English', userId: 1 },
      { language: 'Hindi', userId: 1 },
      { language: 'Portuguese', userId: 1 },
      { language: 'Chinese', userId: 1 },
      { language: 'Spanish', userId: 1 },
      { language: 'French', userId: 1 },
      { language: 'German', userId: 1 },
      { language: 'Japanese', userId: 1 },
      { language: 'Arabic', userId: 1 },
      { language: 'Russian', userId: 1 },
      { language: 'Korean', userId: 1 },
      { language: 'Indonesian', userId: 1 },
      { language: 'Italian', userId: 1 },
      { language: 'Dutch', userId: 1 },
      { language: 'Turkish', userId: 1 },
      { language: 'Polish', userId: 1 },
      { language: 'Swedish', userId: 1 },
      { language: 'Norwegian', userId: 1 },
      { language: 'Filipino', userId: 1 },
      { language: 'Malay', userId: 1 },
      { language: 'Romanian', userId: 1 },
      { language: 'Hungarian', userId: 1 },
      { language: 'Ukrainian', userId: 1 },
      { language: 'Greek', userId: 1 },
      { language: 'Czech', userId: 1 },
      { language: 'Danish', userId: 1 },
      { language: 'Finnish', userId: 1 },
      { language: 'Bulgarian', userId: 1 },
      { language: 'Croatian', userId: 1 },
      { language: 'Slovak', userId: 1 },
      { language: 'Tamil', userId: 1 },
      { language: 'Vietnamese', userId: 1 }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'LanguageCourses';
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options, {
      language: { [Op.in]: ["English", "Hindi","Portuguese","Chinese", "Spanish","French",
        "German","Japanese","Arabic","Russian","Korean","Indonesian","Italian","Dutch",
        "Turkish","Polish","Swedish","Norwegian","Filipino","Malay","Romanian","Hungarian",
        "Ukrainian","Greek","Czech","Danish","Finnish","Bulgarian","Croatian", "Slovak",
        "Tamil","Vietnamese"
       ] }
    }, {});

  }
};


