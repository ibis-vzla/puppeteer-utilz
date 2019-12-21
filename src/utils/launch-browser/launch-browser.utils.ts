import { noop } from '../';

// TODO: finish function

const launchBrowser = noop;

// type Context = {
//   browser: any,
//   page: any,
// };
//
// const launchBrowser = async (startUrl: string): Promise<Context | null> => {
//   try {
//     const session = new Puppeteer();
//     const context: Context = await session.setup(startUrl);
//     return context;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }

export { launchBrowser };
