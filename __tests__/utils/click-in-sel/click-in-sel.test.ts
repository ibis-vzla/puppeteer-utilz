// import signale from 'signale';
// import chalk from 'chalk';
// import { Page, Frame } from 'puppeteer';
// import { noop } from '@/lib/puppeteer-utils';

// const clickInSel = async (page: Page | Frame, sel: string, log: any = signale) => {
//   try {
//     log.debug(chalk`{gray Waiting for selector ${sel}}`);
//     const el = await page.waitForSelector(sel).catch(noop);

//     if (el) {
//       log.debug(chalk`Successfully clicked {green ${sel}}`);
//       await el.click();
//       return;
//     }

//     throw new Error();
//   } catch (error) {
//     log.fatal(chalk`{red Cannot click in selector ${sel} in page ${page}}`);
//   }
// }

// export { clickInSel };