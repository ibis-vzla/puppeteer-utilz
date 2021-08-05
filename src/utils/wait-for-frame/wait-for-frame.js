import chalk from "chalk";

import { findFrame, logger } from "../../internals";

export const waitForFrame = (page, name) =>
  new Promise((resolve) => {
    logger.debug(chalk`{gray Waiting for frame}`);

    const _checkForFrame = () => {
      const frame = findFrame(page.frames(), name);

      if (frame) {
        logger.debug(chalk`{gray Waiting for frame} {green [ok]}`);
        resolve(frame);
      } else {
        logger.debug(
          chalk`{gray Frame attached - retrying... Waiting for frame}`
        );
        page.once("frameattached", _checkForFrame);
      }
    };

    _checkForFrame();
  });
