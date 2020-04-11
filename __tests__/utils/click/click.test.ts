import puppeteer from 'puppeteer';

import {
  click,
  delay,
} from 'src/utils';

describe('with the imported click module', () => {
  it('must be possible: click on a selector', async () => {
    expect.hasAssertions();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://validator.w3.org/');

    const isClicked = await click({
      component: page,
      selector: 'p.submit_button > a.submit',
    });
    await delay(1000);
    await browser.close();

    expect(isClicked).toBe(true);
  }, 30000);

  it('must be possible: throw false if selector not found', async () => {
    expect.hasAssertions();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://validator.w3.org/');

    const isClicked = await click({
      component: page,
      selector: 'test',
    });
    await delay(1000);
    await browser.close();

    expect(isClicked).toBe(true);
  }, 30000);
});
