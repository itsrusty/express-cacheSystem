import { Router } from "express";
import { getCharacters, getEpisodes, getLocations } from "../controllers/data.js";
import cacheInit from "../middlewares/cacheConfig.js";

const routerCache = Router()
const path = "/api"

routerCache.get(`${path}/get-character`, cacheInit, getCharacters)

routerCache.get(`${path}/get-episodes`, cacheInit, getEpisodes)

routerCache.get(`${path}/get-locations`, cacheInit, getLocations)

export default routerCache