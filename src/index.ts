import { IItem, items } from './data';
import { ITargetLanguage, translateService } from './service/translate';

interface IItemResult {
  title: string;
  description: string | null;
}

export async function translateItem(item: IItem, targetLang?: ITargetLanguage): Promise<IItemResult> {
  return {
    title: await translateService(item.title),
    description: item.description && (await translateService(item.description))
  };
}

let processedQueue = [];
let errorQueue = [];

(async () => {
  console.log(`INFO:: 🚧 translating total [${items.length}] items .....`);
  for (let item of items) {
    try {
      processedQueue.push(await translateItem(item))
    } catch (e) {
      errorQueue.push(e)
    }
  }
  const successResult = await Promise.all(processedQueue);
  // console.dir(successResult)

  const failureResults = await Promise.all(errorQueue);

  console.log(`INFO:: ✅ [${successResult.length}] translation completed`)
  console.log(`INFO:: ❌ [${failureResults.length}] translation failed, error report ...`)
  console.dir(failureResults)
})();