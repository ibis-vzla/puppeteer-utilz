import puppeteer from 'puppeteer';

import {
  waitForURL,
} from '../../../src';

describe('with the imported wait-for-url module', () => {
  it('must be possible: wait for a redirect', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.goto('https://www.fb.com/');

    const areURLsSame = await waitForURL(page, 'https://www.facebook.com/');
    browser.close();

    expect(areURLsSame).toBe(true);
  });
});
