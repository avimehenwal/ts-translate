import { describe, expect, test } from '@jest/globals';
import { translateService } from './translate'
import { items } from '../data'
import { translateItem } from '..';

describe('Test::translateService', () => {

  test('happy path - promise is resolved with value', async () => {
    const actual = await translateService(`sdnfklnk nsofn d`)
    expect(actual).toMatch(/Mocked/);
    expect(actual).toContain(`Mocked`);
  });

  test('failure path - promise is rejected', async () => {
    try {
      await translateService(`sdnfklnk nsofn d error`)
    } catch (error) {
      console.dir(error)
      expect(error).toMatchObject({
        code: expect.any(Number),
        msg: expect.any(String),
        original: expect.any(String),
      });
    };
  });
});


describe('Test::translateItem', () => {

  test('happy path - promise is resolved with value', async () => {
    const actual = await translateItem(items[1])
    expect(actual).toMatchObject({
      title: expect.any(String),
      description: expect.any(String),
    });
  });

  test('failure path - promise is rejected', async () => {
    try {
      await translateItem(items[6])
    } catch (error) {
      console.dir(error)
      expect(error).toMatchObject({
        code: expect.any(Number),
        msg: expect.any(String),
        original: expect.any(String),
      });
    };
  });
});