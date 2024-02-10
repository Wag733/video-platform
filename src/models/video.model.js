import mongoose, {Schema} from   "mongoose";
import mongooseAggregatePaginate from
 "mongoose-aggregate-paginate-v2";





const videoSchema= new Schema(
 {
  videoFile:{
   type:String,//cloudinary url
  required:true
 },
 thumbnail:{
  type:String,//cloudinary url
 required:true
},
title
 :{
  type:String,
 required:true
},
description:{
 type:String,
required:true
},
time:
{
 type:String,
required:true
},
duration:{
 type:Number,//cloudinary url
required:true
},
views:{
 type:Number,
 default:0,
required:true
},
isPublished:{//video publicly h ya nii
 type:Boolean,
default:true
},
videoOwner:{
 type:Schema.Types.ObjectId,
 ref:"User"
}
},{timestamps:true}
)


videoSchema.plugin(mongooseAggregatePaginate)
export const Video= mongoose.model("Video",videoSchema)