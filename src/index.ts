import * as dotenv from 'dotenv';
dotenv.config();

const GOOGLE_TRANSLATE_API_KEY = process.env.GOOGLE_TRANSLATE_API_KEY ?? 'undefined';
console.log(GOOGLE_TRANSLATE_API_KEY);
