import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import authRouter from './routes/authRoute.js'
import userRouter from './routes/userRoute.js'
dotenv.config();
const app = express();
app.use(express.json());
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
app.use('/backend/user',userRouter)
app.use('/backend/auth',authRouter)

// middelware to handle the errors
app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal server error'
  return res.status(statusCode).send({
    success:false,
    statusCode,
    message
  })

})




