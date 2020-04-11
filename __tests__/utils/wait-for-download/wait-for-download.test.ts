import puppeteer from 'puppeteer';

import {
  delay,
  findElement,
  setDownloadPath,
  waitForDownload,
} from 'src/utils';

describe('with the imported wait-for-download module', () => {
  it('must be possible: wait for a download to complete', async () => {
    expect.hasAssertions();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://ovh.net/files/');

    const downloadPath = './download-path-test';
    await setDownloadPath(page, {
      behavior: 'allow',
      downloadPath,
    });
    const element: any = await findElement(page, 'a', 'textContent', '1 Mbit file');
    await element.click();
    await delay('2 seconds');

    const filename = await waitForDownload('./download-path-test');
    await browser.close();

    expect(filename).toBe('1Mb.dat');
  }, 30000);
});
