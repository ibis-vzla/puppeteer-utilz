import {
  Frame,
} from 'puppeteer';

const findFrame = (frames: Array<Frame>, name: string) => (
  frames.find(frame => frame.name() === name)
);

export default findFrame;
