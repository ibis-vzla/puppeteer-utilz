import retry from 'async-retry';
import chalk from 'chalk';
import {
  Frame,
  Page,
} from 'puppeteer';

import {
  logger,
} from '../internals';

const _clickOnSelector = async (container: Frame | Page, selector: string) => {
  try {
    logger.debug(chalk`{gray Waiting for the selector: "${selector}"}`);
    const element = await container.waitForSelector(selector);
    logger.debug(chalk`{gray Waiting for the selector: "${selector}"} {green [ok]}`);

    if (element) {
      logger.debug(chalk`Clicking the selector: {green "${selector}"}`);
      await element.click();
      logger.debug(chalk`Clicking the selector: {green "${selector}"} {green [ok]}`);
    } else {
      throw new Error(`Element specified by selector: "${selector}", is not found in DOM`);
    }
  } catch (error) {
    logger.debug(chalk`{red Cannot click on the selector: "${selector}"}`);
    throw new Error(error);
  }
};

export const clickOnSelector = async (container: Frame | Page, selector: string) => {
  await retry(async () => {
    try {
      await _clickOnSelector(container, selector);
    } catch (error) {
      throw new Error(error);
    }
  }, {
    retries: 5,
  });
};