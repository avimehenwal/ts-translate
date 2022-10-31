export type ITargetLanguage = `de` | `fr`;
export type ISourceLanguage = `en`;

export interface IErrorFormat<T = string> {
  code: number;
  msg: string;
  original: T;
}

export interface IItemResult {
  title: string;
  description: string | null;
}

export interface IItem extends IItemResult {
  price: number;
  location: {
    city: string;
    country: string;
  };
}
