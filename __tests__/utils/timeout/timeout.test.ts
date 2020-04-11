import {
  timeout,
} from 'src/utils';

describe('with the imported timeout module, verify the returned object', () => {
  it('parameter in type number: 30000 must correspond to 30000', async () => {
    expect.hasAssertions();

    const object = timeout(30000);

    expect(object).toStrictEqual({
      timeout: 30000,
    });
  });

  it('parameter in type string: \'30 seconds\' must correspond to 30000', async () => {
    expect.hasAssertions();

    const object = timeout('30 seconds');

    expect(object).toStrictEqual({
      timeout: 30000,
    });
  });

  it('parameter in type number: 30000 mustn\'t correspond anything other except to 30000', async () => {
    expect.hasAssertions();

    const object = timeout(30000);

    expect(object).not.toStrictEqual({
      timeout: 29999,
    } || {
      timeout: 30001,
    });
  });

  it('parameter in type string: \'30 seconds\' mustn\'t correspond anything other except to 30000', async () => {
    expect.hasAssertions();

    const object = timeout('30 seconds');

    expect(object).not.toStrictEqual({
      timeout: 29999,
    } || {
      timeout: 30001,
    });
  });
});
