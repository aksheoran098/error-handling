const errorMiddleware = (err,req,res,next) => {
    err.message = err.message || "internal server error"
    err.statusCode = err.statusCode || 500

    if (err.code == 11000){
        err.message = "Duplicate key error",
        err.statusCode =  400    
    }

    return res.status(err.statusCode).json({
        success : false,
        msg : err.message
    })
}

export default errorMiddleware;