import {
  Browser,
  Page,
} from 'puppeteer';
import puppeteer from 'puppeteer-extra';

import {
  logger,
  time,
} from '../../internals';
import {
  noop,
  waitForNavigation,
} from '../';
import {
  Config,
  Context,
} from './index';

const launchBrowser = async (startUrl: string, config: Config = {}): Promise<Context | null> => {
  const {
    plugins,
    loadConfig,
    ...rest
  } = config;

  let browser: Browser;
  let page: Page;
  const _loadConfig = {
    waitUntil: 'networkidle2',
    timeout: time('30 seconds'),
    ...loadConfig,
  };

  if (plugins && plugins.length) {
    plugins.forEach(plugin => {
      puppeteer.use(plugin());
    });
  }

  try {
    logger.debug('Launching browser');
    browser = await puppeteer.launch(rest);
    const [firstPage] = await browser.pages();
    page = firstPage;
  } catch (error) {
    console.error(error);
    return null;
  }

  if (config && config.dimensions) {
    await page.setViewport(config.dimensions).catch(noop);
  }

  logger.debug(`Heading to ${startUrl}`);
  await page.goto(startUrl, _loadConfig).catch(noop);
  await waitForNavigation(page, _loadConfig).catch(noop);
  logger.debug(`${startUrl} is ready`);

  return {
    browser,
    page,
  };
};

export {
  launchBrowser,
};
