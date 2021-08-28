---
title: delay
---

### Description

Generate a delay given a time.

### Parameters

- `ms`: `number` | `string`

### Usage example

```js
import { delay } from "puppeteer-utilz";

(async () => {
  const hrStart = process.hrtime();
  await delay("2 seconds");
  const hrEnd = process.hrtime(hrStart)[0];
  console.log(hrEnd);
})(
})();
```
