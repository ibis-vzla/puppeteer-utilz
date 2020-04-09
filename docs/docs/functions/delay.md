---
title: Delay
---

- `ms`: `number` | `string`

Generate a delay given a time.

```ts
import {
  delay,
} from 'puppeteer-utilz';

(async () => {
  const hrStart = process.hrtime();
  await delay('2 seconds');
  const hrEnd = process.hrtime(hrStart)[0];

  console.log(hrEnd); // 2
})();
```
