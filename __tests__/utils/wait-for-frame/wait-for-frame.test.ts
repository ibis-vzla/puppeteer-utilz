import puppeteer from 'puppeteer';

import {
  waitForFrame,
} from 'src/utils';

describe('with the imported wait-for-frame module', () => {
  it('must be possible: wait for a frame', async () => {
    expect.hasAssertions();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.banesconline.com/mantis/Website/Login.aspx');

    const frameName = 'ctl00_cp_frmAplicacion';
    const frame = await waitForFrame(page, frameName);
    await browser.close();

    expect(frame.name()).toBe(frameName);
  }, 30000);
});
