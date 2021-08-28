import { time } from "../../internals";

export const timeout = (ms) => ({
  timeout: time(ms),
});
