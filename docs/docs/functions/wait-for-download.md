---
title: waitForDownload
---

### Description

Waits for a download to finish. aka, the document is available in the system's fs.


### Parameters

- `path`: `string`

### Usage example

```js
import puppeteer from 'puppeteer';
import {
  delay,
  findElement,
  setDownloadPath,
  waitForDownload,
} from 'puppeteer-utilz';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://ovh.net/files/');

  const downloadPath = './download-path';
  await setDownloadPath(page, {
    behavior: 'allow',
    downloadPath,
  });
  const element: any = await findElement(page, 'a', 'textContent', '1 Mbit file');
  await element.click();
  await delay('5 seconds');

  const filename = await waitForDownload('./download-path-test');
  await browser.close();

  console.log(filename); // '1Mb.dat'
})();
```
