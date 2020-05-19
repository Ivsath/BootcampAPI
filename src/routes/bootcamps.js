import { Router } from "express";
import {
  getBootcamps,
  createBootcamp,
  getBootcamp,
  updateBootcamp,
  deleteBootcamp,
} from "../controllers/bootcamps";

const router = Router();

// /api/v1/bootcamps
router.route("/").get(getBootcamps).post(createBootcamp);

// /api/v1/bootcamps/:id
router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

export default router;
