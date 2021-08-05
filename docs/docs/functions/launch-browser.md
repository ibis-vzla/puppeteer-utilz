---
title: launchBrowser
---

### Description

Starts chrome browser, starts up a page & heads to the supplied url passed as `startUrl`.

### Parameters

- `startUrl`: `string`

### Usage example

```js
import { launchBrowser } from "puppeteer-utilz";
(async () => {
  const { browser, page } = await launchBrowser("https://validator.w3.org/");
  console.log(page.url()); / 'https://validator.w3.org/'

  await browser.close();
})();
```
