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

const launchBrowser = async (startUrl: string, config: Config = {}): Promise<Context | null> => {
  const loadConfig = { waitUntil: 'networkidle2' };

  const { plugins } = config;
  if (plugins && plugins.length) {
    plugins.forEach((plugin: any) => {
      puppeteer.use(plugin());
    });
  }

  try {
    const browser: any = await puppeteer.launch(config).catch(noop);
    const [page] = await browser.pages().catch(noop);

    if (config && config.dimensions) {
      await page.setViewport(config.dimensions).catch(noop);
    }

    await page.goto(startUrl, loadConfig).catch(noop);
    await waitForNavigation(page, console.log, loadConfig);

    return { browser, page };
  } catch (error) {
    console.error(error);
    return null;
  }
}

export { launchBrowser };
