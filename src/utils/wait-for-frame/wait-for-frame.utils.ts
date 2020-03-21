import { Frame } from 'puppeteer';

const waitForFrame = (page: any, name: string): Promise<Frame> => new Promise((resolve) => {
  const checkFrame = () => {
    const frame = page.frames().find((f: any) => f.name() === name);
    if (frame) {
      resolve(frame);
    } else {
      page.once('frameattached', checkFrame);
    }
  }

  checkFrame();
})

export { waitForFrame }
