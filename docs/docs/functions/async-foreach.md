---
title: Async forEach
---

- `array`: `Array<any>`
- `callback`: `any`

Execute a forEach for asynchronous functions.

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
