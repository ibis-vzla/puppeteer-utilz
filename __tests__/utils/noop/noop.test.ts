import {
  noop,
} from 'src/utils';

describe('with the imported noop module', () => {
  it('call noop should do nothing', () => {
    expect.hasAssertions();

    expect(noop()).toBe(undefined);
  });

  it('call noop shouldn\'t do anything other except nothing', () => {
    expect.hasAssertions();

    expect(noop()).not.toBe(!undefined);
  });
});
