// Imports the Google Cloud client library
import { v2 } from "@google-cloud/translate";

// Creates a client
const translate = new v2.Translate();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// const text = 'The text to translate, e.g. Hello, world!';
// const target = 'The target language, e.g. ru';

const translateText = async (text, target) => {
  // Translates the text into the target language. "text" can be a string for
  // translating a single piece of text, or an array of strings for translating
  // multiple texts.
  return await translate.translate(text, target);
};

export { translateText };
