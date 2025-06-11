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



exports.updateStudents = async (req,res)=>{
    try{
 const {id} = req.params;
  const updateStudents = await Students.findByIdAndUpdate(id,req.body,{new:true})

  if(!updateStudents){
    return res.status(404).json({error:"student not found "})
  }

  res.status(200).json({message:"students updated successfully ",updateStudents})
    } catch(error){res.status(500).json({error: "internal server error"})}
}



exports.deleteStudents = async (req,res)=>{
    try{

        const {id} = req.params
        const deleteStudents = await Students.findByIdAndDelete(id)

        if(!deleteStudents){
            return res.status(404).json({error:"student not found"})
        }

  res.status(200).json({
    message:"student added successfully ",deleteStudents
  })
    }catch(error){
        res.status(500).json({error:"internal server error"})
    }
}




