---
title: Timeout
---

- `ms`: `number` | `string`

Returns an object with the timeout property.

```ts
import {
  timeout,
} from 'puppeteer-utilz';

(() => {
  console.log(timeout('30 seconds')); // { timeout: 30000 }
})();
```
