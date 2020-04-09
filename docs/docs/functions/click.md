---
title: Click
---

- `options`: `ClickOptions`
  - `component`: `ElementHandle` | `Frame` | `Page`
  - `selector`: `string`
  - `retries` ? : `number`

Click on a given item a selector.

```ts
import puppeteer from 'puppeteer';
import {
  click,
} from 'puppeteer-utilz';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://validator.w3.org/');

  await click({
    component: page,
    selector: 'p.submit_button > a.submit',
  });

  await browser.close();
})();
```
