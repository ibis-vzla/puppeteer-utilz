import {
  time,
} from '../../internals';

const delay = (ms: number | string) => (
  new Promise(resolve => {
    setTimeout(resolve, time(ms));
  })
);

export default delay;
