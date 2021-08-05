import fs from "fs";

import { time } from "../../internals";

export const waitForDownload = async (path, timeout) => {
  if (timeout) {
    timeout = time(timeout);
  } else {
    timeout = Infinity;
  }

  let filename;
  let hrStart;
  let hrEnd;
  let timeElapsed = 0;

  while (!filename || filename.endsWith(".crdownload")) {
    while (!fs.existsSync(path));

    hrStart = process.hrtime();
    filename = fs.readdirSync(path)[0];
    hrEnd = process.hrtime(hrStart)[1] / 1000000;

    timeElapsed += hrEnd;
    if (timeElapsed > timeout) {
      return false;
    }
  }

  return filename;
};
