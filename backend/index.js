import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import userRouter from './routes/userRoute.js'
dotenv.config();
const app = express();
mongoose.connect(process.env.MONGO)
.then(()=>{
  console.log("database is connected")

  app.listen(5000,()=>{
    console.log('app is running at port 5000')
  })
})
.catch((error)=>{
  console.log(error)

})
app.use('/backend',userRouter)




