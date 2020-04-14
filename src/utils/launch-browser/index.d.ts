import {
  Browser,
  Page,
} from 'puppeteer';

type Context = {
  browser: Browser;
  page: Page;
};

type Dimensions = {
  width: number;
  height: number;
};

type Config = {
  headless?: boolean;
  args?: Array<string>;
  dimensions?: Dimensions;
  plugins?: Array<any>;
  loadConfig?: any;
};
