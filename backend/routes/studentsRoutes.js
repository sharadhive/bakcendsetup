const express = require('express')
const router = express.Router()
const {addStudents,getAllStudents} = require('../controllers/studentController')


router.post('/students', addStudents) 
router.get('/students', getAllStudents)


module.exports = router;