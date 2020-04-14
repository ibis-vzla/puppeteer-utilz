---
title: waitForNavigation
---

### Description

Wrapper of puppeteer waitForNavigation.

This resolves when the page navigates to a new URL or reloads. It is useful for when you run code which will indirectly cause the page to navigate.

[See the documentation](https://github.com/puppeteer/puppeteer/blob/v2.1.1/docs/api.md#pagewaitfornavigationoptions)

### Parameters

- `component`: `Frame` | `Page`
- `options`: `NavigationOptions`
  - `timeout`: `number`

### Usage example

```js
import puppeteer from 'puppeteer';
import { timeout, waitForNavigation } from 'puppeteer-utilz';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.goto('https://github.com/');

  await waitForNavigation(page, timeout('1 minute'));

  await browser.close();
})();
```
