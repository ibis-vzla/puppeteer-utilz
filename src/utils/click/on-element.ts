import {
  ElementHandle,
} from 'puppeteer';

import {
  retry,
} from '../';

const onElement = async (component: ElementHandle) => {
  await component.click();
};

const onElementWithRetries = async (component: ElementHandle, retries: number) => {
  await retry(async () => {
    try {
      await component.click();
    } catch (error) {
      throw new Error(error);
    }
  }, {
    retries,
  });
};

export {
  onElement,
  onElementWithRetries,
};
