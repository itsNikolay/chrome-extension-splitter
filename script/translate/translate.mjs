import { getBaseMessagesPath } from "../translate/pathes.js";
import { createData } from "../translate/data.js";
import { forEachLanguage } from "../translate/languages.js";
import {
  writeDataToFile,
  createMessagesFiles,
  readData,
} from "../translate/files.js";

const Run = async () => {
  const baseMessagesPath = getBaseMessagesPath();
  const baseMessagesData = await readData(baseMessagesPath);
  forEachLanguage(async ([language]) => {
    const messagesPath = createMessagesFiles(language);
    const existingMessagesData = await readData(messagesPath);
    const newData = createData(
      language,
      baseMessagesData,
      existingMessagesData
    );
    await writeDataToFile(messagesPath, newData);
  });
  Object.entries(baseMessagesData).forEach(([key, value]) => {
    console.log(value.message, "\n");
  });
};

Run();
