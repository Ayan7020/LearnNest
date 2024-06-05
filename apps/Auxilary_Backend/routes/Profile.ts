import Express from "express";
import { auth } from "../middlewares/auth"
import { UpdateProfile } from "../controllers/Profile";



const router = Express.Router(); 



router.delete("/deleteProfile",auth)
router.put("/updateprofile",auth,UpdateProfile)
router.get("/getEnrolledCourses",auth)
router.put("/updateDisplayPicture",auth)
router.get("/instructorDashboard",auth)


export default router