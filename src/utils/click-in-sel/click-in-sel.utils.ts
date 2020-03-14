import { Page, Frame } from 'puppeteer';
const chalk = require('chalk');

import { retryOperation } from '../'
import { log } from '../../internals/logger';

const _clickInSel = async (page: Page | Frame, sel: string) => {
  try {
    log.debug(chalk`{gray Waiting for selector ${sel}}`);
    const el = await page.waitForSelector(sel).catch(log.debug);
    log.debug(chalk`{gray Waiting for selector ${sel}} {green [ok]}`);

    if (el) {
      log.debug(chalk`Clicking selector {green ${sel}}`);
      await el.click();
      log.debug(chalk`Clicking selector {green ${sel}} {green [ok]}`);
    } else {
      throw new Error('Element under selector is null');
    }
  } catch (error) {
    log.debug(chalk`{red Cannot click in selector ${sel}}`);
    throw new Error(error);
  }
}

const clickInSel = async (page: Page | Frame, sel: string) => {
  await retryOperation(async () => {
    try {
      await _clickInSel(page, sel)
    } catch (error) {
      throw new Error(error)
    }
  }, 3)
}

export { clickInSel };
