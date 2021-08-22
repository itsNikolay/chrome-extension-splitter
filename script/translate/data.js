import { translateText } from "../translate/testtr.js";

const createData = async (language, baseMessagesData, existingMessagesData) => {
  let data = { ...existingMessagesData };
  for (let [key, value] of Object.entries(baseMessagesData)) {
    if (!data[key]) {
      const text = baseMessagesData[key].message;
      const [translatedMessage] = await translateText(text, language);
      data[key] = baseMessagesData[key];
      data[key].message = translatedMessage;
    }
  }
  return { ...baseMessagesData, ...data };
};

export { createData };
