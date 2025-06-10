const express = require('express'); //step1 
const app = express();//step1
// const PORT = 4000;
const mongoose = require('mongoose') //step3
const env =  require('dotenv') // step2
// const student = require('./models/studentSchema') //step3
env.config()
const studentsroutes = require('./routes/studentsRoutes') //step4


const PORT = process.env.PORT || 4000;//step2


app.use(express.json())


mongoose.connect(process.env.MONGO_URI) //step3
.then(()=> console.log('connected to my mongodb')) //step3
.catch(err => console.error(' mongodb connection error: ',err))//step3





//http://localhost:4000/students



app.use('/',studentsroutes)



// start the server // step2
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
