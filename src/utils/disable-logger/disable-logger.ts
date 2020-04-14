import {
  logger,
} from '../../internals';

const disableLogger = () => {
  logger.disable();
};

export {
  disableLogger,
};
