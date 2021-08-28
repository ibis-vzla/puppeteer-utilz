---
title: click
---

### Description

Click on a element given a selector.

### Parameters

- `options`: `ClickOptions`
  - `component`: `ElementHandle` | `Frame` | `Page`
  - `selector`: `string`
  - `retries` ? : `number`

### Usage example

```js
import puppeteer from "puppeteer";
import { click } from "puppeteer-utilz";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://validator.w3.org/");
  await click({ component: page, selector: "p.submit_button > a.submit" });
  await browser.close();
})();
```
