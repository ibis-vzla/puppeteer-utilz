import { noop } from 'src/utils';

describe('with the imported noop module', () => {
  it('call noop should do nothing', () => {
    expect(noop()).toBe(undefined);
  });

  it(`call noop shouldn't do anything other except nothing`, () => {
    expect(noop()).not.toBe(!undefined);
  });
});
