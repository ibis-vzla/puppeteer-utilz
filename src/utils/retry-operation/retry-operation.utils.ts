import { delay } from '../';

// TODO: Improve typing
// TODO: write documentation

const retryOperation = (operation: any, times: number) => new Promise((resolve, reject) => (
  operation()
    .then(resolve)
    .catch((reason: any) => {
      if (times - 1 > 0) {
        return delay(100)
          .then(retryOperation.bind(null, operation, times - 1))
          .then(resolve)
          .catch(reject);
      }

      reject(reason)
  })
));

export { retryOperation };
