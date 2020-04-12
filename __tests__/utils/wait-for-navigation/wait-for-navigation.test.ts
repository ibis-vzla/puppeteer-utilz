import puppeteer from 'puppeteer';

import {
  timeout,
  waitForNavigation,
} from 'src/utils';

describe('with the imported wait-for-navigation module', () => {
  it('must be possible: wait for a loaded web', async () => {
    expect.hasAssertions();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.goto('https://github.com/');

    const navigationCompleted = await waitForNavigation(page, timeout('1 minute'));
    await browser.close();

    expect(navigationCompleted).toBe(true);
  }, 60000);
});
