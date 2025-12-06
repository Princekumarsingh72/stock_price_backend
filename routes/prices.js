import express from "express";
import { getPricesFromOtherService } from "../controllers/prices.js";

const routes = express.Router();

routes.get("/fake-data",getPricesFromOtherService);
export default routes;