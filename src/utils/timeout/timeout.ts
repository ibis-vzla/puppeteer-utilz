import {
  time,
} from '../../internals';

const timeout = (ms: number | string) => ({
  timeout: time(ms),
});

export {
  timeout,
};
