import { readFile } from "fs/promises";
import path from "path";
import { mkdirSync, writeFileSync, existsSync } from "fs";

const languages = {
  am: { description: "Amharic" },
  ar: { description: "Arabic" },
  bg: { description: "Bulgarian" },
  bn: { description: "Bengali" },
  ca: { description: "Catalan" },
  cs: { description: "Czech" },
  da: { description: "Danish" },
  de: { description: "German" },
  el: { description: "Greek" },
  en_GB: { description: "English (Great Britain)" },
  en_US: { description: "English (USA)" },
  en: { description: "English" },
  es_419: { description: "Spanish (Latin America and Caribbean)" },
  es: { description: "Spanish" },
  et: { description: "Estonian" },
  fa: { description: "Persian" },
  fi: { description: "Finnish" },
  fil: { description: "Filipino" },
  fr: { description: "French" },
  gu: { description: "Gujarati" },
  he: { description: "Hebrew" },
  hi: { description: "Hindi" },
  hr: { description: "Croatian" },
  hu: { description: "Hungarian" },
  id: { description: "Indonesian" },
  it: { description: "Italian" },
  ja: { description: "Japanese" },
  kn: { description: "Kannada" },
  ko: { description: "Korean" },
  lt: { description: "Lithuanian" },
  lv: { description: "Latvian" },
  ml: { description: "Malayalam" },
  mr: { description: "Marathi" },
  ms: { description: "Malay" },
  nl: { description: "Dutch" },
  no: { description: "Norwegian" },
  pl: { description: "Polish" },
  pt_BR: { description: "Portuguese (Brazil)" },
  pt_PT: { description: "Portuguese (Portugal)" },
  ro: { description: "Romanian" },
  ru: { description: "Russian" },
  sk: { description: "Slovak" },
  sl: { description: "Slovenian" },
  sr: { description: "Serbian" },
  sv: { description: "Swedish" },
  sw: { description: "Swahili" },
  ta: { description: "Tamil" },
  te: { description: "Telugu" },
  th: { description: "Thai" },
  tr: { description: "Turkish" },
  uk: { description: "Ukrainian" },
  vi: { description: "Vietnamese" },
  zh_CN: { description: "Chinese (China)" },
  zh_TW: { description: "Chinese (Taiwan)" },
};

const getData = async (filePath) => {
  const data = await readFile(filePath, "utf8");
  const json = JSON.parse(data);
  return json;
};

const createFiles = (baseData) => {
  Object.entries(languages).forEach(async ([locale, value]) => {
    const localePath = path.resolve() + "/" + "src/_locales/" + locale;
    mkdirSync(localePath, { recursive: true });

    const messagesPath = localePath + "/messages.json";
    const isExists = existsSync(messagesPath);
    if (!isExists) {
      writeFileSync(messagesPath, "{}");
    }
    const data = await getData(messagesPath);
    const newData = { ...baseData, ...data };
    writeFileSync(messagesPath, JSON.stringify(newData, null, 2));
  });
};

getData(path.resolve() + "/" + "script/translate/messages.json").then(
  (baseData) => {
    createFiles(baseData);
    Object.entries(baseData).forEach(([key, value]) => {
      console.log(value.message, "\n");
    });
  }
);
