'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

// const axios = require('axios');

// async function translateText(text, targetLanguage) {
//   const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;
//   try {
//     const response = await axios.post(
//       `https://translation.googleapis.com/language/translate/v2`,
//       null,
//       {
//         params: {
//           key: apiKey,
//           q: text,
//           target: targetLanguage
//         }
//       }
//     );
//     return response.data.data.translations[0].translatedText;
//   } catch (error) {
//     console.error('Error translating text:', error);
//     throw error;
//   }
// }

// const languages = ['en', 'hi', 'pt', 'zh', 'es', 'fr', 'de', 'ja', 'ar', 'ru', 'ko', 'id', 'it', 'nl', 'tr', 'pl',
//   'sv', 'no', 'fil', 'ms', 'ro', 'hu', 'uk', 'el', 'cs', 'da', 'fi', 'bg', 'hr', 'sk', 'ta', 'vi'];

// const siteUILanguages = [
//   { language: 'English', userId: 1 },
//   { language: 'Hindi', userId: 1 },
//   { language: 'Portuguese', userId: 1 },
//   { language: 'Chinese', userId: 1 },
//   { language: 'Spanish', userId: 1 },
//   { language: 'French', userId: 1 },
//   { language: 'German', userId: 1 },
//   { language: 'Japanese', userId: 1 },
//   { language: 'Arabic', userId: 1 },
//   { language: 'Russian', userId: 1 },
//   { language: 'Korean', userId: 1 },
//   { language: 'Indonesian', userId: 1 },
//   { language: 'Italian', userId: 1 },
//   { language: 'Dutch', userId: 1 },
//   { language: 'Turkish', userId: 1 },
//   { language: 'Polish', userId: 1 },
//   { language: 'Swedish', userId: 1 },
//   { language: 'Norwegian', userId: 1 },
//   { language: 'Filipino', userId: 1 },
//   { language: 'Malay', userId: 1 },
//   { language: 'Romanian', userId: 1 },
//   { language: 'Hungarian', userId: 1 },
//   { language: 'Ukrainian', userId: 1 },
//   { language: 'Greek', userId: 1 },
//   { language: 'Czech', userId: 1 },
//   { language: 'Danish', userId: 1 },
//   { language: 'Finnish', userId: 1 },
//   { language: 'Bulgarian', userId: 1 },
//   { language: 'Croatian', userId: 1 },
//   { language: 'Slovak', userId: 1 },
//   { language: 'Tamil', userId: 1 },
//   { language: 'Vietnamese', userId: 1 }
// ]

// const siteUIElements = [
//   "Log In",
//   "Sign Up"
// ]


// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     options.tableName = 'SiteUILanguages';
//     const translatedEntries = [];

//     for (const languageEntry of siteUILanguages) {
//       const languageCode = languages[siteUILanguages.indexOf(languageEntry)];

//       for (const element of siteUIElements) {
//         const translatedElement = await translateText(element, languageCode);

//         translatedEntries.push({
//           language: languageEntry.language,
//           userId: languageEntry.userId,
//           element: translatedElement,  // Translated UI element
//           languageCode: languageCode   // Corresponding language code
//         });
//       }
//     }

//     // Bulk insert the translated UI elements into the database
//     await queryInterface.bulkInsert(options, translatedEntries, {});

//   },

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'SiteUILanguages';
    await queryInterface.bulkInsert(options, [{ "id": 1, "language": "English", "userId": 1, "element": "Log In", "languageCode": "en", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 2, "language": "English", "userId": 1, "element": "Sign Up", "languageCode": "en", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 3, "language": "Hindi", "userId": 1, "element": "लॉग इन करें", "languageCode": "hi", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 4, "language": "Hindi", "userId": 1, "element": "साइन अप करें", "languageCode": "hi", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 5, "language": "Portuguese", "userId": 1, "element": "Conecte-se", "languageCode": "pt", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 6, "language": "Portuguese", "userId": 1, "element": "Inscrever-se", "languageCode": "pt", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 7, "language": "Chinese", "userId": 1, "element": "登录", "languageCode": "zh", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 8, "language": "Chinese", "userId": 1, "element": "报名", "languageCode": "zh", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 9, "language": "Spanish", "userId": 1, "element": "Acceso", "languageCode": "es", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 10, "language": "Spanish", "userId": 1, "element": "Inscribirse", "languageCode": "es", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 11, "language": "French", "userId": 1, "element": "Se connecter", "languageCode": "fr", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 12, "language": "French", "userId": 1, "element": "S&#39;inscrire", "languageCode": "fr", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 13, "language": "German", "userId": 1, "element": "Einloggen", "languageCode": "de", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 14, "language": "German", "userId": 1, "element": "Melden Sie sich an", "languageCode": "de", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 15, "language": "Japanese", "userId": 1, "element": "ログイン", "languageCode": "ja", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 16, "language": "Japanese", "userId": 1, "element": "サインアップ", "languageCode": "ja", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 17, "language": "Arabic", "userId": 1, "element": "تسجيل الدخول", "languageCode": "ar", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 18, "language": "Arabic", "userId": 1, "element": "اشتراك", "languageCode": "ar", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 19, "language": "Russian", "userId": 1, "element": "Авторизоваться", "languageCode": "ru", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 20, "language": "Russian", "userId": 1, "element": "Зарегистрироваться", "languageCode": "ru", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 21, "language": "Korean", "userId": 1, "element": "로그인", "languageCode": "ko", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 22, "language": "Korean", "userId": 1, "element": "가입하기", "languageCode": "ko", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 23, "language": "Indonesian", "userId": 1, "element": "Masuk", "languageCode": "id", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 24, "language": "Indonesian", "userId": 1, "element": "Mendaftar", "languageCode": "id", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 25, "language": "Italian", "userId": 1, "element": "Login", "languageCode": "it", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 26, "language": "Italian", "userId": 1, "element": "Iscrizione", "languageCode": "it", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 27, "language": "Dutch", "userId": 1, "element": "Inloggen", "languageCode": "nl", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 28, "language": "Dutch", "userId": 1, "element": "Aanmelden", "languageCode": "nl", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 29, "language": "Turkish", "userId": 1, "element": "Giriş yapmak", "languageCode": "tr", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 30, "language": "Turkish", "userId": 1, "element": "Üye olmak", "languageCode": "tr", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 31, "language": "Polish", "userId": 1, "element": "Zaloguj się", "languageCode": "pl", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 32, "language": "Polish", "userId": 1, "element": "Zapisać się", "languageCode": "pl", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 33, "language": "Swedish", "userId": 1, "element": "Logga in", "languageCode": "sv", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 34, "language": "Swedish", "userId": 1, "element": "Registrera dig", "languageCode": "sv", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 35, "language": "Norwegian", "userId": 1, "element": "Logg inn", "languageCode": "no", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 36, "language": "Norwegian", "userId": 1, "element": "Registrer deg", "languageCode": "no", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 37, "language": "Filipino", "userId": 1, "element": "Mag-log In", "languageCode": "fil", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 38, "language": "Filipino", "userId": 1, "element": "Mag-sign Up", "languageCode": "fil", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 39, "language": "Malay", "userId": 1, "element": "Log Masuk", "languageCode": "ms", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 40, "language": "Malay", "userId": 1, "element": "Daftar", "languageCode": "ms", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 41, "language": "Romanian", "userId": 1, "element": "Log in", "languageCode": "ro", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 42, "language": "Romanian", "userId": 1, "element": "Înscrieți-vă", "languageCode": "ro", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 43, "language": "Hungarian", "userId": 1, "element": "Bejelentkezés", "languageCode": "hu", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 44, "language": "Hungarian", "userId": 1, "element": "Regisztráljon", "languageCode": "hu", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 45, "language": "Ukrainian", "userId": 1, "element": "Увійти", "languageCode": "uk", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 46, "language": "Ukrainian", "userId": 1, "element": "Зареєструватися", "languageCode": "uk", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 47, "language": "Greek", "userId": 1, "element": "Συνδεθείτε", "languageCode": "el", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 48, "language": "Greek", "userId": 1, "element": "Εγγραφείτε", "languageCode": "el", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 49, "language": "Czech", "userId": 1, "element": "Přihlaste se", "languageCode": "cs", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 50, "language": "Czech", "userId": 1, "element": "Zaregistrujte se", "languageCode": "cs", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 51, "language": "Danish", "userId": 1, "element": "Log ind", "languageCode": "da", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 52, "language": "Danish", "userId": 1, "element": "Tilmeld dig", "languageCode": "da", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 53, "language": "Finnish", "userId": 1, "element": "Kirjaudu sisään", "languageCode": "fi", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 54, "language": "Finnish", "userId": 1, "element": "Rekisteröidy", "languageCode": "fi", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 55, "language": "Bulgarian", "userId": 1, "element": "влезте", "languageCode": "bg", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 56, "language": "Bulgarian", "userId": 1, "element": "Регистрирайте се", "languageCode": "bg", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 57, "language": "Croatian", "userId": 1, "element": "Prijavite se", "languageCode": "hr", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 58, "language": "Croatian", "userId": 1, "element": "Prijavite se", "languageCode": "hr", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 59, "language": "Slovak", "userId": 1, "element": "Prihláste sa", "languageCode": "sk", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 60, "language": "Slovak", "userId": 1, "element": "Zaregistrujte sa", "languageCode": "sk", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 61, "language": "Tamil", "userId": 1, "element": "உள்நுழைக", "languageCode": "ta", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 62, "language": "Tamil", "userId": 1, "element": "பதிவு செய்யவும்", "languageCode": "ta", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 63, "language": "Vietnamese", "userId": 1, "element": "Đăng nhập", "languageCode": "vi", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }, { "id": 64, "language": "Vietnamese", "userId": 1, "element": "Đăng ký", "languageCode": "vi", "createdAt": "2024-10-18T02:02:37.000Z", "updatedAt": "2024-10-18T02:02:37.000Z" }], {});
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'SiteUILanguages';
    const Op = Sequelize.Op;

    const languagesToDelete = ['en', 'hi', 'pt', 'zh', 'es', 'fr', 'de', 'ja', 'ar', 'ru', 'ko', 'id', 'it', 'nl', 'tr', 'pl',
      'sv', 'no', 'fil', 'ms', 'ro', 'hu', 'uk', 'el', 'cs', 'da', 'fi', 'bg', 'hr', 'sk', 'ta', 'vi'];

    await queryInterface.bulkDelete(options, {
      languageCode: { [Op.in]: languagesToDelete }
    }, {});

  }
};