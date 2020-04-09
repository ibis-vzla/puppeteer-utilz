---
title: Set download path
---

- `page`: `Page`
- `behavior`: `Object`
  - `behavior`: `string`
  - `downloadPath`: `string`

Set a download path.

```ts
import puppeteer from 'puppeteer';
import {
  delay,
  findElement,
  setDownloadPath,
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

  await browser.close();

  console.log(fs.existsSync(downloadPath)); // true
})();
```
