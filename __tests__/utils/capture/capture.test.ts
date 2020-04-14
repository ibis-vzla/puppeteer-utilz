import fs from 'fs';
import puppeteer from 'puppeteer';

import {
  capture,
} from 'src/utils';

describe('with the imported capture module', () => {
  it('should take a screenshot', async () => {
    expect.hasAssertions();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.banesconline.com/mantis/Website/Login.aspx');

    const captured = await capture(page, {
      padding: 16,
      path: './test.png',
      selector: 'iframe[id="ctl00_cp_frmAplicacion"]',
    });

    await browser.close();

    expect(captured).not.toBe(null);
  }, 60000);

  it(`should return null if selector doesn't match any element in the DOM`, async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.banesconline.com/mantis/Website/Login.aspx');

    const captured = await capture(page, {
      padding: 16,
      path: './test.png',
      selector: 'test',
    });

    await browser.close();

    expect(captured).toBe(null);
  }, 60000);

  it('should save screenshot in the correct path', async () => {
    expect.hasAssertions();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.banesconline.com/mantis/Website/Login.aspx');

    const path = './test.png';
    await capture(page, {
      padding: 16,
      path,
      selector: 'iframe[id="ctl00_cp_frmAplicacion"]',
    });

    await browser.close();

    expect(fs.existsSync(path)).toBe(true);
  }, 60000);
});
