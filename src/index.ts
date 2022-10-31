import { items } from './data';
import { translateItem } from './module/translateItem';
import { IErrorFormat, IItemResult } from './types';

async function main() {
    const processedQueue = [];
    const errorQueue: Array<IErrorFormat<string>> = [];

    console.log(`INFO:: 🚧 translating total [${items.length}] items .....`);
    for (const item of items) {
        try {
            processedQueue.push(await translateItem(item));
        } catch (e) {
            errorQueue.push(e as IErrorFormat<string>);
        }
    }
    const successResult = await Promise.all<IItemResult>(processedQueue);
    const failureResults = await Promise.all<IErrorFormat<string>>(errorQueue);
    // console.dir(successResult)

    console.log(`INFO:: ✅ [${successResult.length}] translation completed`);
    console.log(`INFO:: ❌ [${failureResults.length}] translation failed, error report ...`);
    console.dir(failureResults);
}

main();
