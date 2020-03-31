const dimensions = {
  width: 1080,
  height: 920,
};

const {
  width,
  height,
} = dimensions;

const puppeteerConfig = {
  headless: false,
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    `--window-size=${width},${height}`,
    '--disable-infobars',
  ],
};

export {
  dimensions,
  puppeteerConfig,
};
