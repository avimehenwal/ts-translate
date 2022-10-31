import { describe, expect, test } from '@jest/globals';
import { translateService } from './translate'


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
      });
    };
  });
});