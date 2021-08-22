import { translateText } from "../translate/testtr.js";

const createData = (language, baseMessagesData, existingMessagesData) => {
  let newData = { ...existingMessagesData };
  Object.entries(baseMessagesData).forEach(async ([key, value]) => {
    if (!newData[key]) {
      const text = baseMessagesData[key]["message"];
      newData[key]["message"] = await translateText(text, language);
    }
  });
  return { ...baseMessagesData, ...newData };
};

export { createData };
