import chalk from 'chalk';
import {
  Frame,
  NavigationOptions,
  Page,
} from 'puppeteer';

import {
  logger,
} from 'src/internals';

const waitForNavigation = async (component: Frame | Page, options: NavigationOptions) => {
  logger.debug(chalk`{gray Waiting for navigation to finish}`);

  try {
    await component.waitForNavigation(options);

    return true;
  } catch (error) {
    return false;
  }
};

export {
  waitForNavigation,
};
