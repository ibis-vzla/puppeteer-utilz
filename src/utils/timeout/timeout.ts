import {
  time,
} from 'src/internals';

const timeout = (ms: number | string) => ({
  timeout: time(ms),
});

export {
  timeout,
};
