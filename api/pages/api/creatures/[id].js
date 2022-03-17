import { simpleJSONGetByIdHandler } from "utils/requestHandlers";

export default async function handler(req, res) {
  return simpleJSONGetByIdHandler(req, res, "creatures");
}
