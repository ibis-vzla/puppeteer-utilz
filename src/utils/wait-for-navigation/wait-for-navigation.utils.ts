import { Page, Frame } from 'puppeteer';
const chalk = require('chalk')
import { noop } from '../';

const waitForNavigation = async (window: Page | Frame, log: any, config: any) => {
  log.debug(chalk`{gray Waiting for navigation to finish}`);

  await window
    .waitForNavigation(config)
    .catch(
      process.env.NODE_ENV === 'production'
        ? noop
        : console.error
    );
}

export { waitForNavigation };
