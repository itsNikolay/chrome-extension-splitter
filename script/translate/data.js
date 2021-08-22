import { translateText } from "../translate/testtr.js";

const processMessage = (key, mesage) => {
  let message = mesage;
  if (key === "extName") {
    message = `Splitter - ${message}`;
    message = message.replace("Google Chrome", "Google Chrome™");
  }
  return message;
};

const createData = async (language, baseMessagesData, existingMessagesData) => {
  let data = { ...existingMessagesData };

  for (let [key] of Object.entries(baseMessagesData)) {
    if (!data[key] || baseMessagesData[key].force) {
      const text = baseMessagesData[key].message;
      console.log(text, language);
      const [translatedMessage] = await translateText(text, language);
      data[key] = baseMessagesData[key];
      let message = processMessage(key, translatedMessage);
      data[key].message = message;
    }
    delete data[key].force;
  }
  return { ...baseMessagesData, ...data };
};

export { createData };
