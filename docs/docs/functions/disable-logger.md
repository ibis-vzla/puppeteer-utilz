---
title: Disable logger
---

### Description

Disable the logger.

### Usage example

```ts
import {
  disableLogger,
} from 'puppeteer-utilz';

(async () => {
  disableLogger();

  console.log(logger.isEnabled()); // false
})();
```
