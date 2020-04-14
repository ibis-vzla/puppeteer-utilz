import ms from 'ms';

const time = (time: number | string): number => {
  if (typeof time === 'string') {
    time = ms(time);
  }

  return time;
};

export {
  time,
};
