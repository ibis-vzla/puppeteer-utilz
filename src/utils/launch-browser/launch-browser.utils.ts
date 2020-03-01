import puppeteer from 'puppeteer-extra';
import {
  noop,
  waitForNavigation,
} from '../';

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
};

const launchBrowser = async (startUrl: string, config: Config = {}, log: any): Promise<Context | null> => {
  const loadConfig = { waitUntil: 'networkidle2', timeout: 30000 };

  const { plugins } = config;
  if (plugins && plugins.length) {
    plugins.forEach((plugin: any) => {
      puppeteer.use(plugin());
    });
  }

  try {
    log.debug('Launching browser')
    const browser: any = await puppeteer.launch(config).catch(noop);
    const [page] = await browser.pages().catch(noop);

    if (config && config.dimensions) {
      await page.setViewport(config.dimensions).catch(noop);
    }

    log.debug(`Heading to ${startUrl}`)
    await page.goto(startUrl, loadConfig).catch(noop);
    await waitForNavigation(page, log, loadConfig);
    log.debug(`${startUrl} is ready`)

    return { browser, page };
  } catch (error) {
    console.error(error);
    return null;
  }
}

export { launchBrowser };
