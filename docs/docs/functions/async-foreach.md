---
title: asyncForEach
---

### Description

The same as javascript's `Array.forEach` but functional & async.

### Parameters

- `array`: `Array<any>`
- `callback`: `Async Function`

### Example

```js
import { asyncForEach, delay } from "puppeteer-utilz";

(async () => {
  const array = [1, 2, 3];
  const callback = async (number) => {
    console.log(number);
    await delay(1000);
  };
  rints 1, 2 & 3 with a 1s delay in between
  a
  await asyncForEach(array, callback);
})();
```
