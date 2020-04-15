import puppeteer from 'puppeteer';

import { getFrame, timeout } from 'src/utils';

describe('with the imported get-frame module', () => {
  it('must be possible: return a frame', async () => {
    expect.hasAssertions();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      'https://allwebco-templates.com/support/S_script_IFrame.htm',
      timeout('10 minutes'),
    );

    const frameName = 'Framename';
    const frame = getFrame(page, frameName);
    await browser.close();

    expect(frame?.name()).toBe(frameName);
  });

  it('must be possible: return null if frame not found', async () => {
    expect.hasAssertions();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      'https://allwebco-templates.com/support/S_script_IFrame.htm',
      timeout('10 minutes'),
    );

    const frameName = 'test';
    const frame = getFrame(page, frameName);
    await browser.close();

    expect(frame?.name()).toBe(undefined);
  });
});
