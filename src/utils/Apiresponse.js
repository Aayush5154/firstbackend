class Apiresponse{
    //jab bhi kisi ko response nhejna h to ye class to lagegi hi
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode,
        this.data = data,
        this.message = message,
        this.success = statusCode < 400 
    }
}