import { getBaseMessagesPath } from "./pathes.js";
import { createData } from "./data.js";
import { forEachLanguage } from "./languages.js";
import { writeDataToFile, createMessagesFiles, readData } from "./files.js";

const Run = async () => {
  const baseMessagesPath = getBaseMessagesPath();
  const baseMessagesData = await readData(baseMessagesPath);
  forEachLanguage(async ([language]) => {
    const messagesPath = createMessagesFiles(language);
    const existingMessagesData = await readData(messagesPath);
    const newData = await createData(
      language,
      baseMessagesData,
      existingMessagesData
    );
    await writeDataToFile(messagesPath, newData);
  });
};

Run();
