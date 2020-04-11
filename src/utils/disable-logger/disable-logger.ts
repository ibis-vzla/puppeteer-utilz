import {
  logger,
} from 'src/internals';

const disableLogger = () => {
  logger.disable();
};

export {
  disableLogger,
};
