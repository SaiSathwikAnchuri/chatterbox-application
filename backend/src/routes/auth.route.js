import exress from "express"
import { login, logout, signup,updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { checkAuth } from "../controllers/auth.controller.js";
const router = exress.Router();

router.post("/signup",signup)

router.post("/login",login)

router.post("/logout",logout)

router.put("/update-profile",protectRoute,updateProfile)

router.get("/check",protectRoute,checkAuth)

export default router;