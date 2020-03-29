import {
  Page,
} from 'puppeteer';

import {
  delay,
} from '../../utils';

const waitURL = (page: Page, expectedURL: string) => (
  new Promise(async resolve => {
    let URLsAreDifferent = true;

    while (URLsAreDifferent) {
      const currentURL = page.url();

      if (currentURL === expectedURL) {
        URLsAreDifferent = false;
      }

      await delay(500);
    }

    resolve();
  })
);

export default waitURL;
