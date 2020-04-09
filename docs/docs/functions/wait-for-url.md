---
title: Wait for URL
---

### Description

Wait for a URL that is redirecting.

### Parameters

- `page`: `Page`
- `expectedURL`: `string`

### Usage example

```ts
import puppeteer from 'puppeteer';
import {
  waitForURL,
} from 'puppeteer-utilz';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.goto('https://www.fb.com/');

  await waitForURL(page, 'https://www.facebook.com/');

  browser.close();
})();
```
