import {
  Page,
} from 'puppeteer';

import {
  findFrame,
} from '../../internals';

const getFrame = (page: Page, name: string) => {
  const frame = findFrame(page.frames(), name);

  if (!frame) {
    return null;
  }

  return frame;
};

export {
  getFrame,
  getFrame as refreshFrame,
};
