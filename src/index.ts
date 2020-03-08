import logger from './internals/logger';
import * as utils from './utils/index';

export * from './utils/index';

export default (config: any) => {
  const { disableLog } = config;
  if (disableLog) {
    // @ts-ignore
    logger.disable()
  }

  return utils
}
