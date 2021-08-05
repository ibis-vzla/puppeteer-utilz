import { delay } from "..";
import { time } from "../../internals";

export const waitForURL = async (page, expectedURL, timeout) => {
  if (timeout) {
    timeout = time(timeout);
  } else {
    timeout = Infinity;
  }

  let URLsAreDifferent = true;
  let hrStart;
  let hrEnd;
  let timeElapsed = 0;

  while (URLsAreDifferent) {
    hrStart = process.hrtime();

    const currentURL = page.url();
    if (currentURL === expectedURL) {
      URLsAreDifferent = false;
    }
    await delay(500);

    hrEnd = process.hrtime(hrStart)[1] / 1000000;

    timeElapsed += hrEnd;
    if (timeElapsed > timeout) {
      return false;
    }
  }

  return true;
};
