import { items } from './data';
import { translateItem } from './service/translateItem';

async function main() {
  let processedQueue = [];
  let errorQueue = [];

  console.log(`INFO:: 🚧 translating total [${items.length}] items .....`);
  for (let item of items) {
    try {
      processedQueue.push(await translateItem(item))
    } catch (e) {
      errorQueue.push(e)
    }
  }
  const successResult = await Promise.all(processedQueue);
  const failureResults = await Promise.all(errorQueue);
  // console.dir(successResult)

  console.log(`INFO:: ✅ [${successResult.length}] translation completed`)
  console.log(`INFO:: ❌ [${failureResults.length}] translation failed, error report ...`)
  console.dir(failureResults)
}

main();