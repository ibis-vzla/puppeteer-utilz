import {
  asyncForeach,
  delay,
} from '../../../src';

describe('with the imported async-foreach module', () => {
  it('must be possible to execute async functions', async () => {
    expect.hasAssertions();

    let expectedString = '';

    const array = [1000, 2000, 1000, 1000, 2000];
    const callback = async (element: number) => {
      const hrStart = process.hrtime();
      await delay(element);
      const hrEnd = process.hrtime(hrStart)[0];
      expectedString += hrEnd.toString();
    };

    await asyncForeach(array, callback);

    expect(expectedString).toBe('12112');
  }, 30000);
});
