import {
  Page,
} from 'puppeteer';

import {
  time,
} from 'src/internals';
import {
  delay,
} from 'src/utils';

const waitForURL = async (page: Page, expectedURL: string, timeout?: number | string) => {
  if (timeout) {
    timeout = time(timeout);
  } else {
    timeout = Infinity;
  }

  let URLsAreDifferent = true;
  let hrStart;
  let hrEnd;
  let timeElapsed = 0;

  while (URLsAreDifferent) {
    hrStart = process.hrtime();

    const currentURL = page.url();
    if (currentURL === expectedURL) {
      URLsAreDifferent = false;
    }
    await delay(500);

    hrEnd = process.hrtime(hrStart)[1] / 1000000;

    timeElapsed += hrEnd;
    if (timeElapsed > timeout) {
      return false;
    }
  }

  return true;
};

export {
  waitForURL,
};
