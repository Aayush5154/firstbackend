const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandler}


//with try catch
// const asyncHandler = (fn) => async (req, res, next) => {
    //yani is fn ko async me pass ker rahe hai
    //asyncHandler ek higher order function h joki function as a parameter accept ker skte h or function hi return bhi karte hai  
//     try{
//         await fn(req, res, next)
//     }catch(error){
//         res.status(error.code || 500).json({success : false,
//             message: error.message})
//     }
// }
//higher order function jo function as h parameter le skta hai 
