import * as dotenv from 'dotenv';
import { items } from './data';
dotenv.config();
import { IItem } from './data';
import { v2 } from '@google-cloud/translate';
const { Translate } = v2;

type ITargetLanguage = `de` | `fr`;
type ISourceLanguage = `en`;

const TARGET_LANG: ITargetLanguage = `de`;
const DELAY: number = 400;

function translateService(str: string, target: ITargetLanguage): Promise<string> {
  // several tranlsting straetgies could be used here. Eg: google translate service
  // for my purposed I am mocked it

  // const projectId = process.env.GOOGLE_TRANSLATE_API_KEY ?? 'undefined';
  // const translate = new Translate({ keyFilename: './src/keyFile.json' });

  // (async () => {
  //   let [translations] = await translate.translate(text, TARGET_LANG);
  //   console.dir(translations, { depth: null });
  // })();

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`mocked translation - ${(Math.random() + 1).toString(36)}`);
    }, DELAY);
  });
}

async function translateItem(item: IItem, targetLang: ITargetLanguage): Promise<IItem> {
  item.title = await translateService(item.title, TARGET_LANG);
  item.description = item.description && (await translateService(item.description, TARGET_LANG));
  return item;
}

console.log(`INFO: translating [${items.length}] items .....`);
(async () => {
  for (let item of items) {
    console.log(`translating --------------------- ${item.title}`);
    const translatedItem = await translateItem(item, TARGET_LANG);
    console.dir(translatedItem);
  }
})();
