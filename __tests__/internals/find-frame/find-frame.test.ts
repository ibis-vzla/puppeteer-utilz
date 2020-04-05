import puppeteer from 'puppeteer';

import {
  findFrame,
} from '../../../src/internals';

describe('with the imported find-frame module', () => {
  it('must be possible: look for a frame within an array', async () => {
    expect.hasAssertions();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.banesconline.com/mantis/Website/Login.aspx');

    const array = page.frames();
    const frameName = 'ctl00_cp_frmAplicacion';
    const frame = findFrame(array, frameName);
    await browser.close();

    expect(frame?.name()).toBe(frameName);
  }, 30000);

  it('must be possible: throw undefined if the frame is not found', async () => {
    expect.hasAssertions();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.banesconline.com/mantis/Website/Login.aspx');

    const array = page.frames();
    const frameName = 'test';
    const frame = findFrame(array, frameName);
    await browser.close();

    expect(frame).toBe(undefined);
  }, 30000);
});
