import { Page } from 'puppeteer';

// NOTE: page.frames() also returns nested frames

const getFrame = (page: Page, name: string) => {
  const frames = page.frames();
  const frame = frames.find((candidateFrame: any) => candidateFrame.name() === name);

  if (frame === undefined) {
    throw new Error(`Couldn't find frame by name ${name}`);
  }

  return frame;
};

const refreshFrame = getFrame;

export { getFrame, refreshFrame };
