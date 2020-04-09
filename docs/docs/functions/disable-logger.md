---
title: Disable logger
---

Disable the logger.

```ts
import {
  disableLogger,
} from 'puppeteer-utilz';

(async () => {
  disableLogger();

  console.log(logger.isEnabled()); // false
})();
```
