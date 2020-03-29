import chalk from 'chalk';
import {
  Frame,
  NavigationOptions,
  Page,
} from 'puppeteer';

import {
  logger,
} from '../../internals';

const waitForNavigation = async (component: Frame | Page, options: NavigationOptions) => {
  logger.debug(chalk`{gray Waiting for navigation to finish}`);

  await component.waitForNavigation(options);
};

export default waitForNavigation;
