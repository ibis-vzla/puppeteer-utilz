import { Page } from 'puppeteer';
const chalk = require('chalk')
import { clickInSel } from '../';

// TODO: refactor to parameters be a config object
// TODO: add better logging

const typeInSelVal = async (page: Page, sel: string, val: string, log: any, name = '') =>  {
  await clickInSel(page, sel, log);
  log.debug(chalk`Input Name: {green ${name}} | Value: {green ${val}}`);
  await page.type(sel, val, { delay: 111 });
}

export { typeInSelVal };
