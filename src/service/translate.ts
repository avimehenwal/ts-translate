import { v2 } from '@google-cloud/translate';
import * as dotenv from 'dotenv';
import { TARGET_LANG, DELAY } from '../constants';
import { ITargetLanguage, IErrorFormat } from '../types';
dotenv.config();

export function translateService(str: string, target: ITargetLanguage = TARGET_LANG): Promise<string> {
  // several tranlsting straetgies could be used here. Eg: google translate service
  // for my purposed I am mocked it

  // const projectId = process.env.GOOGLE_TRANSLATE_API_KEY ?? 'undefined';
  // const translate = new Translate({ keyFilename: './src/keyFile.json' });

  // (async () => {
  //   let [translations] = await translate.translate(text, TARGET_LANG);
  //   console.dir(translations, { depth: null });
  // })();

  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve(`Mocked::${str}: - ${(Math.random() + 1).toString(36)}`);
    }, DELAY);

    // simulate a error path
    if (str.includes('error')) {
      const errorMsg: IErrorFormat<string> = {
        code: 500,
        msg: `some custom error message`,
        original: str,
      };
      rejects(errorMsg);
    }
  });
}
