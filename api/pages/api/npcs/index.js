import { simpleJSONGetAllHandler } from "utils/requestHandlers";

export default async function handler(req, res) {
  return simpleJSONGetAllHandler(req, res, "npcs");
}
