import ErrorHandler from "../utils/errorHandler.js";
import {User} from "../model/user.js"
import { catchAsyncError } from "../middlewares/cathchAsyncError.js";

export const newUser = catchAsyncError(
    async (req,res,next)=>{

    const user = await User.findOne({email : "aks@gmail.com"})

    if (user){
        return next (new ErrorHandler("User already exist", 402))
    }
    await User.create({
        name: "Ankushh",email : "aks@gmail.com"
    })
    res.status(201).json({
        message : "user Created successfully"
    });

}
)