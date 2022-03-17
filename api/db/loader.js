import { readFile } from "fs/promises";
import path from "path";

var data = {};

export const JSONLoader = async (model) => {
  if (!model) {
    return;
  }
  if (!data[model]) {
    data[model] = JSON.parse(await readFile(path.resolve(process.cwd(), `./public/data/${model}.json`)));
  }
  return data[model];
};
