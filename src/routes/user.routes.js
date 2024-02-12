import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js";

const router= Router()

router.route("/register").post(
 //middleware jaate hue mil k jaana thats why we have used upload in the middlr
 upload.fields([
  {
   name:"avatar",
   maxCount:1
  },
{
name:"coverImage",
maxCount: 1
}
 ]),
 registerUser)


export default router