const express = require('express');
const router = express.Router()
const Service = require('../models/Service')

router.get('/', async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services)
    }
    catch (err) {
        res.json({ message: err })
    }
})

module.exports = router