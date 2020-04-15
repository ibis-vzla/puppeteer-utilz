import puppeteer from 'puppeteer';

import { timeout, waitForFrame } from 'src/utils';

describe('with the imported wait-for-frame module', () => {
  it('must be possible: wait for a frame', async () => {
    expect.hasAssertions();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      'https://allwebco-templates.com/support/S_script_IFrame.htm',
      timeout('10 minutes'),
    );

    const frameName = 'Framename';
    const frame = await waitForFrame(page, frameName);
    await browser.close();

    expect(frame.name()).toBe(frameName);
  });
});
