import puppeteer from 'puppeteer';

import {
  click,
  delay,
} from 'src/utils';

describe('with the imported click module', () => {
  it('should be possible to click on element given a selector', async () => {
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

  it(`should return false if given selector isn't found`, async () => {
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

    expect(isClicked).toBe(false);
  }, 60000);
});
