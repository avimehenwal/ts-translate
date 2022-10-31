import { describe, expect, test } from '@jest/globals';
import { items } from '../data';
import { translateItem } from './translateItem';

describe('Test::translateItem', () => {
  test('happy path - promise is resolved with translated properties', async () => {
    await expect(translateItem(items[1])).resolves.toMatchObject({
      title: expect.any(String),
      description: expect.any(String),
    });
  });

  test('failure path - promise is rejected with proper error message', async () => {
    await expect(translateItem(items[6])).rejects.toMatchObject({
      code: expect.any(Number),
      msg: expect.any(String),
      original: expect.any(String),
    });
  });
});
