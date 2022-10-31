import { TARGET_LANG } from '../constants';
import { IItem, IItemResult, ITargetLanguage } from '../types';
import { translateService } from '../service/translate';

export async function translateItem(item: IItem, targetLang: ITargetLanguage = TARGET_LANG): Promise<IItemResult> {
    return {
        title: await translateService(item.title, targetLang),
        description: item.description && (await translateService(item.description, targetLang)),
    };
}
