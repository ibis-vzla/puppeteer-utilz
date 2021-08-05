---
title: waitForURL
---

### Description

Waits for the given URL to settle in the browser.

### Parameters

- `page`: `Page`
- `expectedURL`: `string`

### Usage example

```js
import puppeteer from "puppeteer";
import { waitForURL } from "puppeteer-utilz";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.goto("https://www.fb.com/");
  await waitForURL(page, "https://www.facebook.com/");
  browser.close();
})();
```
