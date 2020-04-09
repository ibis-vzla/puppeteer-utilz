---
title: Wait for navigation
---

- `component`: `Frame` | `Page`
- `options`: `NavigationOptions`
  - `timeout`: `number`

Wait for a URL.

```ts
import puppeteer from 'puppeteer';
import {
  timeout,
  waitForNavigation,
} from 'puppeteer-utilz';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.goto('https://github.com/');

  await waitForNavigation(page, timeout('1 minute'));

  await browser.close();
})();
```
