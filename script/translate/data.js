import { getLanguagePart } from "../translate/languages.js";
import { getMessage } from "../translate/message.js";

const createData = async (language, baseMessagesData, existingMessagesData) => {
  let data = { ...existingMessagesData };

  for (let [key] of Object.entries(baseMessagesData)) {
    if (!data[key] || baseMessagesData[key].force) {
      const text = baseMessagesData[key].message;
      const lang = getLanguagePart({ language });
      const message = await getMessage({ text, lang, key });

      data[key] = { ...baseMessagesData[key], message };
    }
    delete data[key].force;
  }
  return { ...baseMessagesData, ...data };
};

export { createData };
