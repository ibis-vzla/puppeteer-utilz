import { delay } from "..";
import { logger } from "../../internals";

export const debug = async () => {
  logger.debug(
    "A debugging session has started. Halting code execution for 30 minutes."
  );
  await delay("10 minutes");
  logger.debug("10 minutes elapsed");
  await delay("10 minutes");
  logger.debug("20 minutes elapsed");
  await delay("10 minutes");
  logger.debug("30 minutes elapsed");
};
