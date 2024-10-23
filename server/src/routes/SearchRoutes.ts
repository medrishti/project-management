import { Router } from "express";
import { Search } from "../controllers/SearchControllers";

const router = Router();

router.get("/", Search);


export default router;