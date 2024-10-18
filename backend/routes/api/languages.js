const express = require('express');
const { SiteUILanguage } = require('../../db/models');

const router = express.Router();

router.get('/', async (req, res, next) => {

    // Fetch all data from the Units table
    const allUnits = await SiteUILanguage.findAll();

    // Send the data as a JSON response
    res.json(allUnits);

});


module.exports = router;
