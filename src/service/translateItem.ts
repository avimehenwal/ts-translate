import { IItem } from "../data";
import { ITargetLanguage, translateService } from "./translate";

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
