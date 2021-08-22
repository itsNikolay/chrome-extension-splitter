import { translateText } from "../translate/testtr.js";

const processTitleMessage = ({ key, message }) => {
  return key === "extName"
    ? `Splitter: ${message}`.replace("Chrome", "Chrome™")
    : message;
};

const trimRoMessage = ({ message, lang }) =>
  lang === "ro" ? message.replace(/ de /, " ") : message;

const trimItMessage = ({ message, lang }) =>
  lang === "it"
    ? message.replace(/ lo /, " ").replace(/ li /, " ").replace(/ per /, " ")
    : message;

const trimBgMessage = ({ message, lang }) =>
  lang === "bg" ? message.replace(/ на /, " ") : message;

const trimEsMessage = ({ message, lang }) =>
  lang === "es" ? message.replace(/ de /, " ") : message;

const validateTitleMessage = ({ message, lang }) => {
  if (message.length > 45) {
    throw new Error(
      `extName is too long ${lang} (${message.length}) (${message})`
    );
  }
};

const getMessage = async ({ text, lang, key }) => {
  let [message] = await translateText(text, lang);
  message = processTitleMessage({ key, message });
  message = trimRoMessage({ lang, message });
  message = trimItMessage({ lang, message });
  message = trimBgMessage({ lang, message });
  message = trimEsMessage({ lang, message });
  validateTitleMessage({ message, lang });
  return message;
};

export { processTitleMessage, getMessage };
