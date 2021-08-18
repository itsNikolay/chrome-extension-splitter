import { readFile } from "fs/promises";
import path from "path";
import { mkdirSync, writeFileSync, existsSync } from "fs";

const languages = {
  ar: { description: "Arabic" },
  am: { description: "Amharic" },
  bg: { description: "Bulgarian" },
  bn: { description: "Bengali" },
  ca: { description: "Catalan" },
  cs: { description: "Czech" },
  da: { description: "Danish" },
  de: { description: "German" },
  el: { description: "Greek" },
  en: { description: "English" },
  en_GB: { description: "English (Great Britain)" },
  en_US: { description: "English (USA)" },
  es: { description: "Spanish" },
  es_419: { description: "Spanish (Latin America and Caribbean)" },
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
  Object.entries(languages).forEach(([locale, value]) => {
    const localePath = path.resolve() + "/" + "src/_locales/" + locale;
    mkdirSync(localePath, { recursive: true });

    const messagesPath = localePath + "/messages.json";
    const isExists = existsSync(messagesPath);
    if (!isExists) {
      writeFileSync(messagesPath, "{}");
    }
    const data = getData(messagesPath).then((data) => {
      console.log(data);
    });
    const newData = { ...baseData, ...data };
    writeFileSync(messagesPath, JSON.stringify(newData, null, 2));
  });
};

getData(path.resolve() + "/" + "script/translate/messages.json").then(
  async (baseData) => {
    await createFiles(baseData);
  }
);
