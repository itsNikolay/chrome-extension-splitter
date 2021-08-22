import { translateText } from "../translate/testtr.js";

const processMessage = (key, mesage) => {
  let message = mesage;
  if (key === "extName") {
    message = `Splitter - ${message}`;
    message = message.replace("Chrome", "Chrome™");
  }
  return message;
};

const processLanguage = (language) => {
  const [firstPart] = language.split("_");
  return firstPart;
};

const createData = async (language, baseMessagesData, existingMessagesData) => {
  let data = { ...existingMessagesData };

  for (let [key] of Object.entries(baseMessagesData)) {
    if (!data[key] || baseMessagesData[key].force) {
      const text = baseMessagesData[key].message;
      const lang = processLanguage(language);
      const [translatedMessage] = await translateText(text, lang);
      data[key] = baseMessagesData[key];
      let message = processMessage(key, translatedMessage);
      data[key].message = message;
    }
    delete data[key].force;
  }
  return { ...baseMessagesData, ...data };
};

export { createData };
