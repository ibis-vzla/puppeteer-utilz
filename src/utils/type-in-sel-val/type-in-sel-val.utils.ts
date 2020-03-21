import { Page, Frame } from 'puppeteer';
const chalk = require('chalk')

import { clickInSel } from '../';
import { log } from '../../internals/logger';

// TODO: refactor to parameters be a config object
// TODO: add better logging

const typeInSelVal = async (page: Page | Frame, sel: string, val: string, name = '') =>  {
  await clickInSel(page, sel);
  log.debug(chalk`Input Name: {green ${name}} | Value: {green ${val}}`);
  await page.type(sel, val, { delay: 111 });
}

export { typeInSelVal };
