---
title: getFrame
---

### Description

Returns a frame from a page given its name.

### Parameters

- `page`: `Page`
- `name`: `string`

### Usage example

```js
import puppeteer from 'puppeteer';
import { getFrame } from 'puppeteer-utilz';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://allwebco-templates.com/support/S_script_IFrame.htm');

  const frameName = 'Framename';
  const frame = await getFrame(page, frameName);
  console.log(frame.name()); // 'Framename'

  await browser.close();
})();
```
