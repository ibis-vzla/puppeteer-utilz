import * as fs from 'fs';

import {
  delay,
} from '../../utils';

const waitForDownload = (path: string) => (
  new Promise(async resolve => {
    let filename: string | undefined;

    while (!filename || filename.endsWith('.crdownload')) {
      filename = fs.readdirSync(path)[0];

      await delay(500);
    }

    resolve(filename);
  })
);

export {
  waitForDownload,
};
