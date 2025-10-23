class ApiError extends Error {
    //yani api error aayenge to is tarah aayenge 
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""  
    ){
        super(message)//overwriding the message 
        this.statusCode = statusCode
        this.data = null // assignment form ducumentaion (node js api error)
        this.message = message
        this.success = false;//success flag me sirf false jayega 
        this.errors = errors
        if(stack) {
            this.stack = stack
        }//taki error ka stack trace mil jaye (yaha yaha in files me dikkat hain)
        else {
            Error.captureStackTrace(this, this.constructor)//uska indtance pass ker diya 
        }
    }
}

export {ApiError}
