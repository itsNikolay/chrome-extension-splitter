import path from "path";
import { mkdirSync, writeFileSync, existsSync } from "fs";

const createMessagesFiles = (locale) => {
  const localePath = path.resolve() + "/" + "src/_locales/" + locale;
  mkdirSync(localePath, { recursive: true });

  const messagesPath = localePath + "/messages.json";
  const isExists = existsSync(messagesPath);
  if (!isExists) {
    writeFileSync(messagesPath, "{}");
  }
  return messagesPath;
};

const writeDataToFile = async (messagesPath, newData) => {
  writeFileSync(messagesPath, JSON.stringify(newData, null, 2));
};

import { readFile } from "fs/promises";

const readData = async (filePath) => {
  const data = await readFile(filePath, "utf8");
  const json = JSON.parse(data);
  return json;
};

export { createMessagesFiles, writeDataToFile, readData };
