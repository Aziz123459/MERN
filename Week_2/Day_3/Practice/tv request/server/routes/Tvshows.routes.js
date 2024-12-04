import { Router } from "express";
import tvShowController from "../controllers/Tvshows.controller.js";
const router = Router()

router.route("/shows")
    .get(tvShowController.readAll)

router.route("/shows/:yearCreated")
    .get(tvShowController.readYear)

router.route("/shows/:tvShow")
    .delete(tvShowController.delete)
    .patch(tvShowController.update)

router.route("/add/show")
    .post(tvShowController.creat)





export default router;