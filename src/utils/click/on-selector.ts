import chalk from 'chalk';
import {
  noTryAsync,
} from 'no-try';
import {
  Frame,
  Page,
} from 'puppeteer';

import {
  logger,
} from 'src/internals';
import {
  retry,
} from 'src/utils';

const _getElement = async (component: Frame | Page, selector: string) => {
  logger.debug(chalk`{gray Waiting for the selector: "${selector}"}`);
  const {
    result,
  } = await noTryAsync(() => component.waitForSelector(selector));

  return result;
};

const onSelector = async (component: Frame | Page, selector: string) => {
  const element = await _getElement(component, selector);

  if (!element) {
    logger.debug(`Element specified by the selector: "${selector}", is not found in DOM`);
    return false;
  } else {
    logger.debug(chalk`{gray Waiting for the selector: "${selector}"} {green [ok]}`);
  }

  logger.debug(chalk`Clicking the selector: {green "${selector}"}`);
  const {
    error,
  } = await noTryAsync(() => element.click());

  if (error) {
    logger.debug(chalk`{red Cannot click on the selector: "${selector}"}`);
    return false;
  } else {
    logger.debug(chalk`Clicking the selector: {green "${selector}" [ok]}`);
    return true;
  }
};

const onSelectorWithRetries = async (component: Frame | Page, selector: string, retries: number) => {
  await retry(async () => {
    try {
      await onSelector(component, selector);
    } catch (error) {
      throw new Error(error);
    }
  }, {
    retries,
  });
};

export {
  onSelector,
  onSelectorWithRetries,
};
