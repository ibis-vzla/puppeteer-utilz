---
title: Async forEach
---

### Description

Execute a forEach for asynchronous functions.

### Parameters

- `array`: `Array<any>`
- `callback`: `any`

### Usage example

```ts
import {
  asyncForeach,
} from 'puppeteer-utilz';

(async () => {
  const array = [...];
  const callback = async (...) => {
    ...
  };

  await asyncForeach(array, callback);
})();
```
