import { Router } from "express";
import {
  getBootcamps,
  createBootcamp,
  getBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius,
} from "../controllers/bootcamps";

const router = Router();

router.route("/radius/:zipcode/:distance").get(getBootcampsInRadius);

// /api/v1/bootcamps
router.route("/").get(getBootcamps).post(createBootcamp);

// /api/v1/bootcamps/:id
router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

export default router;
