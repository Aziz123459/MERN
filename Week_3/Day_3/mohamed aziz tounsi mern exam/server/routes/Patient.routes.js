import PatientsController from "../controllers/Patient.controller.js";
import {Router} from "express"

const router=Router()

router.route("/patient")
    .post(PatientsController.creat)
    .get(PatientsController.ReadAll)

router.route("/patient/:id")
    .get(PatientsController.ReadOne)
    .put(PatientsController.update)
    .delete(PatientsController.delete)
export default router