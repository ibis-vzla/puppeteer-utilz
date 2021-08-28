import chalk from "chalk";
import { noTryAsync } from "no-try";

import { logger } from "../../internals";

export const waitForNavigation = async (window, options) => {
  logger.debug(chalk`{gray Waiting for navigation to finish}`);

  const { result } = await noTryAsync(() => window.waitForNavigation(options));

  if (!result) {
    return false;
  } else {
    return true;
  }
};
