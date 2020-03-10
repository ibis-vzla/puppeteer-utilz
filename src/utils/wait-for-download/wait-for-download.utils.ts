import * as fs from 'fs';

import { delay } from '../';

const waitForDownload = (path: string) => new Promise(async (resolve: any) => {
  let filename;

  while (!filename || filename.endsWith('.crdownload')) {
    filename = fs.readdirSync(path)[0];
    await delay(500);
  }

  resolve(filename);
})

export { waitForDownload }
