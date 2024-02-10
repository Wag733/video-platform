import multer from "multer";
// cb is callback
//file multer me hi rehti h

const storage = multer.diskStorage({
 destination: function (req, file, cb) {
   cb(null, "./public/temp")
 },
 filename: function (req, file, cb) {
  //cb(null, file.fieldname + '-' + uniqueSuffix)
  cb(null,file.originalname)
 }
})

export const upload = multer({ storage, })