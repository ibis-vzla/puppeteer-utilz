import {
  Page,
} from 'puppeteer';

const capture = async (page: Page, options: CaptureOptions) => {
  const {
    padding,
    path,
    selector,
  } = options;

  const rect = await page.evaluate(selector => {
    const element = document.querySelector(selector);

    if (!element) {
      return null;
    }

    const {
      x,
      y,
      width,
      height,
    } = element.getBoundingClientRect();

    return {
      left: x,
      top: y,
      width,
      height,
      id: element.id,
    };
  }, selector);

  if (!rect) {
    return null;
  }

  return await page.screenshot({
    path,
    clip: {
      x: rect.left - padding,
      y: rect.top - padding,
      width: rect.width + padding * 2,
      height: rect.height + padding * 2,
    },
  });
};

export {
  capture,
};
