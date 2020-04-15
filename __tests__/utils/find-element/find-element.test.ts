import puppeteer from 'puppeteer';

import { findElement } from 'src/utils';

describe('with the imported find-element module', () => {
  it('must be possible: find an element by content', async () => {
    expect.hasAssertions();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://validator.w3.org/');

    const element: any = await findElement(page, 'span', 'textContent', 'Markup Validation Service');
    await browser.close();

    expect(element._remoteObject.subtype).not.toBe('null');
  }, 30000);

  it(`should return null if element isn't found`, async () => {
    expect.hasAssertions();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://validator.w3.org/');

    const element: any = await findElement(page, 'span', 'textContent', 'xMarkup Validation Service');
    await browser.close();

    expect(element._remoteObject.subtype).toBe('null');
  }, 30000);
});
