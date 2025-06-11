const express = require('express')
const router = express.Router()
const {addStudents,getAllStudents,updateStudents,deleteStudents} = require('../controllers/studentController')


router.post('/students', addStudents) // add the students 
router.get('/students', getAllStudents) // all students detail 
router.put('/students/:id', updateStudents)// updated the students 
router.delete('/students/:id', deleteStudents)// deleted the students 


module.exports = router;