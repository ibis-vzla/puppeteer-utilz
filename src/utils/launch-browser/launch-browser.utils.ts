import puppeteer from 'puppeteer-extra';
import { Browser, Page } from 'puppeteer';
import {
  noop,
  waitForNavigation,
} from '../';

import { log } from '../../internals/logger';

type Context = {
  browser: any,
  page: any,
};
type Dimensions = {
  width: number,
  height: number,
};
type Config = {
  headless?: boolean,
  args?: Array<string>
  dimensions?: Dimensions,
  plugins?: Array<any>,
  loadConfig?: any,
};

const launchBrowser = async (startUrl: string, config: Config = {}): Promise<Context | null> => {
  const { plugins, loadConfig, ...rest } = config;

  let browser: Browser;
  let page: Page;
  const _loadConfig = {
    waitUntil: 'networkidle2',
    timeout: 30000,
    ...loadConfig
  };

  if (plugins && plugins.length) {
    plugins.forEach((plugin: any) => {
      puppeteer.use(plugin());
    });
  }

  try {
    log.debug('Launching browser')
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

  log.debug(`Heading to ${startUrl}`)
  await page.goto(startUrl, _loadConfig).catch(noop);
  await waitForNavigation(page, _loadConfig).catch(noop);
  log.debug(`${startUrl} is ready`)

  return { browser, page };
}

export { launchBrowser };
