---
title: timeout
---

### Description

Returns an object with the timeout property.

### Parameters

- `ms`: `number` | `string`

### Usage example

```ts
import {
  timeout,
} from 'puppeteer-utilz';

(() => {
  console.log(timeout('30 seconds')); // { timeout: 30000 }
})();
```
