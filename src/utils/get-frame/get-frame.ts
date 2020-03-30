import {
  Page,
} from 'puppeteer';

import {
  findFrame,
} from '../../internals';

const getFrame = (page: Page, name: string) => {
  const frame = findFrame(page.frames(), name);

  if (!frame) {
    throw new Error(`Couldn't find frame by name: "${name}"`);
  }

  return frame;
};

export {
  getFrame,
  getFrame as refreshFrame,
};
