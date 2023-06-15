const express = require('express');

const router = express.Router();
const {getAllbooks} = require('../controllers/bookscontroller')



router.get('/books', getAllbooks)


module.exports = router;