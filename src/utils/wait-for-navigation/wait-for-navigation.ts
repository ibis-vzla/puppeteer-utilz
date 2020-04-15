import chalk from 'chalk';
import {
  noTryAsync,
} from 'no-try';
import {
  Frame,
  NavigationOptions,
  Page,
} from 'puppeteer';

import {
  logger,
} from '../../internals';

const waitForNavigation = async (window: Frame | Page, options: NavigationOptions) => {
  logger.debug(chalk`{gray Waiting for navigation to finish}`);

  const {
    result,
  } = await noTryAsync(() => window.waitForNavigation(options));

  if (!result) {
    return false;
  } else {
    return true;
  }
};

export {
  waitForNavigation,
};
