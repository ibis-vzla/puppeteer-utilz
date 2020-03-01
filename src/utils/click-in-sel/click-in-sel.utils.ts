import { Page, Frame } from 'puppeteer';
import signale from 'signale';
import chalk from 'chalk';
import { retryOperation } from '../'

const _clickInSel = async (page: Page | Frame, sel: string, log: any = signale) => {
  try {
    log.debug(chalk`{gray Waiting for selector ${sel}}`);
    const el = await page.waitForSelector(sel).catch(log.debug);
    log.debug(chalk`{gray Waiting for selector ${sel}} [ok]`);

    if (el) {
      log.debug(chalk`Clicking selector {green ${sel}}`);
      await el.click();
      log.debug(chalk`Clicking selector {green ${sel}} [ok]`);
    } else {
      throw new Error('element under selector is null');
    }
  } catch (error) {
    log.debug(chalk`{red Cannot click in selector ${sel}}`);
    log.debug(error);
    throw new Error(error);
  }
}

const clickInSel = async (page: Page | Frame, sel: string, log: any = signale) => {
  await retryOperation(async () => {
    try {
      await _clickInSel(page, sel, log)
    } catch (error) {
      throw new Error(error)
    }
  }, 3, log)
}

export { clickInSel };
