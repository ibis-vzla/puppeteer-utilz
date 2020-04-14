---
title: findElement
---

### Description

Search for a specific item given its tag and content.

### Parameters

- `window`: `Frame` | `Page`
- `tagName`: `string`
- `lookForIn`: `string`
- `content`: `string`

### Usage example

```js
import puppeteer from 'puppeteer';
import { findElement } from 'puppeteer-utilz';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://validator.w3.org/');

  const element: any = await findElement(page, 'span', 'textContent', 'Markup Validation Service');

  await browser.close();
})();
```
