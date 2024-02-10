 import {v2 as cloudinary} from "cloudinary";
 import fs from "fs";
 //file system install nii karna padta nodejs me rehta hi h

 //Cloudinary congig hi file wagerah upload karrne ki permission degi 
 //warna isko  qa hi pta knsa acount knsa login 
 //kar rha knsa file mang rha         
cloudinary.config({ 
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME , 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret:process.env.CLOUDINARY_API_SECRET
});
const uploadOnCloudinary= async(localFilePath)=>{
 try{
  if(!localFilePath) return null//upload the file on cloudinary
 
 const response= await cloudinary.uploader.upload(localFilePath,{
 resource_type:"auto"
})
 console.log("file is uploaded on cloudinary", response.url); 
 return response;
}
catch(error){
 fs.unlinkSync(localFilePath)// remove the locally saved temp. file bcz ope got wrong
 return null;
}
}
export {uploadOnCloudinary}