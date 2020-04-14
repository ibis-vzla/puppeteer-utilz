import puppeteer from 'puppeteer';

import {
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

    const downloadPath = './1-test-folder';
    await setDownloadPath(page, {
      behavior: 'allow',
      downloadPath,
    });
    const element: any = await findElement(page, 'a', 'textContent', '1 Mbit file');
    await element.click();

    const filename = await waitForDownload(downloadPath);
    await browser.close();

    expect(filename).toBe('1Mb.dat');
  }, 60000);

  it(`shouldn't be possible to download 10 Gbit file in 1 second`, async () => {
    expect.hasAssertions();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://ovh.net/files/');

    const downloadPath = './2-test-folder';
    await setDownloadPath(page, {
      behavior: 'allow',
      downloadPath,
    });
    const element: any = await findElement(page, 'a', 'textContent', '10 Gbit file');
    await element.click();

    const filename = await waitForDownload(downloadPath, 1000);
    await browser.close();

    expect(filename).toBe(false);
  }, 60000);
});
