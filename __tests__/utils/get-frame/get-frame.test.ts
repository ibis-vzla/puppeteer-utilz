import puppeteer from 'puppeteer';

import {
  getFrame,
} from '../../../src';

describe('with the imported get-frame module', () => {
  it('must be possible: return a frame', async () => {
    expect.hasAssertions();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.banesconline.com/mantis/Website/Login.aspx');

    const frameName = 'ctl00_cp_frmAplicacion';
    const frame = getFrame(page, frameName);
    await browser.close();

    expect(frame?.name()).toBe(frameName);
  }, 30000);

  it('must be possible: return null if frame not found', async () => {
    expect.hasAssertions();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.banesconline.com/mantis/Website/Login.aspx');

    const frameName = 'test';
    const frame = getFrame(page, frameName);
    await browser.close();

    expect(frame?.name()).toBe(undefined);
  }, 30000);
});
