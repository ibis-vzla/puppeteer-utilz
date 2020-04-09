---
title: Capture
---

- `page`: `Page`
- `options`: `CaptureOptions`
  - `padding`: `number`
  - `path`: `string`
  - `selector`: `string`

Take a screenshot of an item given the selector.

```ts
import puppeteer from 'puppeteer';
import {
  capture,
} from 'puppeteer-utilz';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://validator.w3.org/');

  await capture(page, {
    padding: 16,
    path: './image.png',
    selector: 'p.submit_button > a.submit',
  });

  await browser.close();
})();
```
