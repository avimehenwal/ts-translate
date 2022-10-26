import * as dotenv from 'dotenv';
import { items } from './data';

import { v2 } from '@google-cloud/translate';
const { Translate } = v2;

dotenv.config();

const projectId = process.env.GOOGLE_TRANSLATE_API_KEY ?? 'undefined';
console.log(projectId);

console.log(items.length);
for (let item of items) {
  console.dir(item?.title);
}

const translate = new Translate({ keyFilename: './src/keyFile.json' });

const text = items[0]?.title;
const target = `de`;

(async () => {
  let [translations] = await translate.translate(text, target);
  console.dir(translations, { depth: null });
})();
