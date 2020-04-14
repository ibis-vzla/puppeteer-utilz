---
title: blockResources
---

### Description

Block resources from being loaded.

### Parameters

- `page`: `Window | Frame`
- `resources`: `Array<string>`

### Example

```js
import { blockResources } from 'puppeteer-utilz';

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	const resources = [
		'stylesheet',
		'font',
		'image',
	]

  await blockResources(page, resources);

	await page.goto('https://validator.w3.org/');

	await browser.close()
})()
```
