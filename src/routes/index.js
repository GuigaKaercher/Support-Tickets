import { tickets } from "./tickets.js";
import { parserRoutePath } from "../utils/parseRoutePath.js";
export const routes = [...tickets].map((route) =>({
    ...route,
    path: parserRoutePath(route.path)
}))