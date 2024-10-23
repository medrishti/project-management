import { Router } from "express";
import { getTeams } from "../controllers/teamsControllers";

const router = Router();

router.get("/", getTeams);


export default router;