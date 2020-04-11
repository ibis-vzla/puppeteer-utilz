import {
  time,
} from 'src/internals';

const delay = (ms: number | string) => (
  new Promise(resolve => {
    setTimeout(resolve, time(ms));
  })
);

export {
  delay,
};
