import { logger } from 'src/internals';

describe('with the imported logger module', () => {
  it('must be possible: send log messages', () => {
    logger.debug('test');

    expect(logger.isEnabled()).toBe(true);
  });
});
