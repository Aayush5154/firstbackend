import multer from "multer";

//jab server me file aa jayegi uske baad jab hame use save krna h to ham use DiskStorage ke save karte hai 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //ye file ka naya ek extra access milta h yaha 
    cb(null, "./public/temp")
    //cb is just callback 
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) // ye fileid random set krne ke liuye hai 
    cb(null, file.originalname)// isme update krna hai 
    //yaha se pura local path aa jata h 
  }
})

export const upload = multer({ 
    storage,
})
//now config is done 
