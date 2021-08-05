import ms from "ms";

export const time = (time) => {
  if (typeof time === "string") {
    time = ms(time);
  }

  return time;
};
