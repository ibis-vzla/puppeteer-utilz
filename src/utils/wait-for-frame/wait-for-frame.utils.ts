import { Frame } from 'puppeteer';
const chalk = require('chalk');

import { log } from '../../internals/logger';

const waitForFrame = (page: any, name: string): Promise<Frame> => new Promise((resolve) => {
  log.debug(chalk`{gray Waiting for frame}`);
  const checkFrame = () => {
    const frame = page.frames().find((f: any) => f.name() === name);
    if (frame) {
      log.debug(chalk`{gray Waiting for frame} {green [ok]}`);
      resolve(frame);
    } else {
      log.debug(chalk`{gray Frame attached - retrying... Waiting for frame}`);
      page.once('frameattached', checkFrame);
    }
  }

  checkFrame();
})

export { waitForFrame }
