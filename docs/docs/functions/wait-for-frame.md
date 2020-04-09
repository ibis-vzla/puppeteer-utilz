---
title: Wait for frame
---

- `page`: `Page`
- `name`: `string`

Wait for a frame to appear on a page.

```ts
import puppeteer from 'puppeteer';
import {
  waitForFrame,
} from 'puppeteer-utilz';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.banesconline.com/mantis/Website/Login.aspx');

  const frameName = 'ctl00_cp_frmAplicacion';
  const frame = await waitForFrame(page, frameName);
  console.log(frame.name()); // 'ctl00_cp_frmAplicacion'

  await browser.close();
})();
```
