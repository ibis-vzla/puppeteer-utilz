import {
  delay,
} from '../../../src';

describe('with the imported delay module, calculate the execution time', () => {
  it('parameter in type number: 2000 must correspond to 2 seconds', async () => {
    expect.hasAssertions();

    const hrStart = process.hrtime();
    await delay(2000);
    const hrEnd = process.hrtime(hrStart)[0];

    expect(hrEnd).toBe(2);
  });

  it('parameter in type string: \'2 seconds\' must correspond to 2 seconds', async () => {
    expect.hasAssertions();

    const hrStart = process.hrtime();
    await delay('2 seconds');
    const hrEnd = process.hrtime(hrStart)[0];

    expect(hrEnd).toBe(2);
  });

  it('parameter in type number: 2000 mustn\'t correspond anything other except to 2 seconds', async () => {
    expect.hasAssertions();

    const hrStart = process.hrtime();
    await delay(2000);
    const hrEnd = process.hrtime(hrStart)[0];

    expect(hrEnd).not.toBe(1 || 3);
  });

  it('parameter in type string: \'2 seconds\' mustn\'t correspond anything other except to 2 seconds', async () => {
    expect.hasAssertions();

    const hrStart = process.hrtime();
    await delay('2 seconds');
    const hrEnd = process.hrtime(hrStart)[0];

    expect(hrEnd).not.toBe(1 || 3);
  });
});
