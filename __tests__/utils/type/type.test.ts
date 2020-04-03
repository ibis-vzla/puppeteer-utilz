import puppeteer from 'puppeteer';

import {
  type,
  waitForFrame,
} from '../../../src';

describe('with the imported type module', () => {
  it('must be possible: type into input', async () => {
    expect.hasAssertions();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.banesconline.com/mantis/Website/Login.aspx');

    const frame = await waitForFrame(page, 'ctl00_cp_frmAplicacion');
    const typed = await type(frame, {
      selector: 'input[id="txtUsuario"]',
      value: 'jest',
      name: 'LOGIN INPUT',
    });
    await browser.close();

    expect(typed).toBe('jest');
  }, 30000);
});
