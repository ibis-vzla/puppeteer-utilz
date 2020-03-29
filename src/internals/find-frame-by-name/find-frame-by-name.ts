import {
  Frame,
} from 'puppeteer';

const findFrameByName = (frames: Array<Frame>, name: string) => (
  frames.find(frame => frame.name() === name)
);

export default findFrameByName;
