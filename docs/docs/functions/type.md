---
title: Type
---

### Description

Type in a selector.

### Parameters

- `component`: `Frame` | `Page`
- `options`: `TypeOptions`
  - `selector`: `string`
  - `value`: `string`
  - `name`: `string`

### Usage example

```ts
import puppeteer from 'puppeteer';
import {
  type,
} from 'puppeteer-utilz';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://validator.w3.org/');

  await type(page, {
    selector: 'input#uri',
    value: 'jest',
    name: 'uri',
  });

  await browser.close();
})();
```
