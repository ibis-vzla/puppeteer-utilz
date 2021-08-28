import { time } from "../../internals";

export const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, time(ms));
  });
