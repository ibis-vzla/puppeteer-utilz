import chalk from 'chalk';
import {
  Frame,
  Page,
} from 'puppeteer';

import {
  findFrame,
  logger,
} from '../../internals';

const waitForFrame = (page: Page, name: string): Promise<Frame> => (
  new Promise(resolve => {
    logger.debug(chalk`{gray Waiting for frame}`);

    const _checkForFrame = () => {
      const frame = findFrame(page.frames(), name);

      if (frame) {
        logger.debug(chalk`{gray Waiting for frame} {green [ok]}`);
        resolve(frame);
      } else {
        logger.debug(chalk`{gray Frame attached - retrying... Waiting for frame}`);
        page.once('frameattached', _checkForFrame);
      }
    };

    _checkForFrame();
  })
);

export default waitForFrame;
