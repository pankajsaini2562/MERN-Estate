export const erorHandler = (statusCode,message)=>{
  const error = new error()
  error.statusCode = statusCode
  error.message = message
  return error;


}