import fs from 'fs';

import {
  delay,
} from 'src/utils';

const waitForDownload = async (path: string) => {
  let filename: string | undefined;

  while (!filename || filename.endsWith('.crdownload')) {
    await delay(1000);

    filename = fs.readdirSync(path)[0];
  }

  return filename;
};

export {
  waitForDownload,
};
