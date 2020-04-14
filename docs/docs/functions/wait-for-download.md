---
title: waitForDownload
---

### Description

Wait for a download to finish.

### Parameters

- `path`: `string`

### Usage example

```ts
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
