import {
  delay,
} from 'src/utils';

describe('with the imported delay module, calculate the execution time', () => {
  it('parameter in type number: 100 must correspond to 100 milliseconds', async () => {
    expect.hasAssertions();

    const hrStart = process.hrtime();
    await delay(100);
    const hrEnd = process.hrtime(hrStart)[1] / 1000000;

    expect(hrEnd).toBeLessThanOrEqual(105);
  });

  it(`parameter in type string: '100 milliseconds' must correspond to 100 milliseconds`, async () => {
    expect.hasAssertions();

    const hrStart = process.hrtime();
    await delay('100 milliseconds');
    const hrEnd = process.hrtime(hrStart)[1] / 1000000;

    expect(hrEnd).toBeLessThanOrEqual(105);
  });

  it(`parameter in type number: 100 mustn't correspond anything other except to 100 milliseconds`, async () => {
    expect.hasAssertions();

    const hrStart = process.hrtime();
    await delay(100);
    const hrEnd = process.hrtime(hrStart)[1] / 1000000;

    expect(hrEnd).not.toBeGreaterThanOrEqual(105);
  });

  it(`parameter in type string: '100 milliseconds' mustn't correspond anything other except to 100 milliseconds`, async () => {
    expect.hasAssertions();

    const hrStart = process.hrtime();
    await delay('100 milliseconds');
    const hrEnd = process.hrtime(hrStart)[1] / 1000000;

    expect(hrEnd).not.toBeGreaterThanOrEqual(105);
  });
});
