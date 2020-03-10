import { delay } from '../';

// TODO: add timeout?
const waitUntilUrl = (page: any, expectedUrl: string) => new Promise(async (resolve: any) => {
  let flag = true;

  while (flag) {
    const currentURL = await page.url();
    if (currentURL === expectedUrl) {
      flag = false
    }
    await delay(500);
  }

  resolve(true);
})

export { waitUntilUrl }
