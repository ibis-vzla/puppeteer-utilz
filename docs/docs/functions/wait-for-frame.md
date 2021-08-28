---
title: waitForFrame
---

### Description

Waits for a frame to appear on the supplied page.

### Parameters

- `page`: `Page`
- `name`: `string`

### Usage example

```js
import puppeteer from "puppeteer";
import { waitForFrame } from "puppeteer-utilz";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://allwebco-templates.com/support/S_script_IFrame.htm");
  const frameName = "Framename";
  const frame = await waitForFrame(page, frameName);
  console.log(frame.name()); Framename'
  await browser.close();
})();
```
