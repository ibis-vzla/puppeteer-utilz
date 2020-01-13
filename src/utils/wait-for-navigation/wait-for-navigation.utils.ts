import { Page, Frame } from 'puppeteer';
import { delay, noop } from '../';

// TODO: add better logging

const waitForNavigation = async (window: Page | Frame, _log: any, config: any) => {
  // log.debug(chalk`{gray Waiting for navigation to finish}`);
  await window.waitForNavigation(config).catch(noop);
  await delay(2000);
}

export { waitForNavigation };
