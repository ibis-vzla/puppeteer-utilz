import {
  Page,
} from 'puppeteer';

import {
  delay,
} from 'src/utils';

const waitForURL = async (page: Page, expectedURL: string) => {
  let URLsAreDifferent = true;

  while (URLsAreDifferent) {
    const currentURL = page.url();

    if (currentURL === expectedURL) {
      URLsAreDifferent = false;
    }

    await delay(500);
  }

  return true;
};

export {
  waitForURL,
};
