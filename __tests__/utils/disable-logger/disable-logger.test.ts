import { logger } from 'src/internals';
import { disableLogger } from 'src/utils';

describe('with the imported disable-logger module', () => {
  it('should be able to disable the logger', () => {
    disableLogger();

    expect(logger.isEnabled()).toBe(false);
  }, 30000);
});
