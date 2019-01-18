

const errorHandler = (req,res,next) =>{
 res.status(404).json({
    msg:'Page not found'
  })
  next();
}


// const genericErrorHandler = (err,req,res,next) =>{
//   res.status(200).json({
//      msg:'Page notasdfasdfsdafsdaf found'
//    })
//  }

export {errorHandler};