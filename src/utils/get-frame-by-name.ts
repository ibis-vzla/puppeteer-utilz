import {
  Frame,
  Page,
} from 'puppeteer';

export const getFrameByName = (page: Page, name: string): Frame => {
  const frames = page.frames();
  const frame = frames.find(element => (
    element.name() === name
  ));

  if (!frame) {
    throw new Error(`Couldn't find frame by name: "${name}"`);
  }

  return frame;
};
