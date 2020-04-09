---
title: Launch browser
---

### Description

Set a puppeteer environment.

### Parameters

- `startUrl`: `string`

### Usage example

```ts
import {
  launchBrowser,
} from 'puppeteer-utilz';

(async () => {
  const context = await launchBrowser('https://validator.w3.org/');
  const browser = context?.browser;
  const page = context?.page;

  console.log(page.url()); // 'https://validator.w3.org/'

  await browser.close();
})();
```
