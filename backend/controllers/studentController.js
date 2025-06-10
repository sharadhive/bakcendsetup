const Students = require('../models/studentSchema')


exports.addStudents = async(req,res)=>{
try{
    const {name,age,grade}= req.body
const student = new Students({name , age , grade})

await student.save()
res.status(201).json({message : "student added successfully ", student})
} catch (error){
    res.status(500).json({error: "internal server error" ,})
}
}
exports.getAllStudents = async (req, res) => {
    try {
        const allStudents = await Students.find()
        res.status(200).json({ message: "All students retrieved successfully", allStudents })
    } catch (error) {
        res.status(500).json({ error: "Internal server error" })
    }


}