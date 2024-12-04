import userController from "../controllers/user.controller.js"
import {Router} from "express";
const router=Router()


router.route("/api/users/new")
    .get(userController.newuser)

router.route("/api/companies/new") 
    .get(userController.newcompany)

router.route("/api/user/company")
    .get(userController.newUserCompany)

export default router