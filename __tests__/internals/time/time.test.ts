import {
  time,
} from 'src/internals';

describe('if a string is received', () => {
  it('convert string to number', () => {
    expect.hasAssertions();

    expect(time('2 days')).toBe(172800000);
  }, 30000);
});

describe('if a number is received', () => {
  it('do nothing', () => {
    expect.hasAssertions();

    expect(time(60000)).toBe(60000);
  }, 30000);
});
