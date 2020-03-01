import signale from 'signale';
import { delay } from '../';

// TODO: Improve typing
// TODO: write documentation

const retryOperation = (operation: any, times: number, log: any = signale) => new Promise((resolve, reject) => (
  operation()
    .then(resolve)
    .catch((reason: any) => {
      log.debug('Something failed, retrying in 100ms')

      if (times - 1 > 0) {
        return delay(100)
          .then(retryOperation.bind(null, operation, times - 1))
          .then(resolve)
          .catch(reject);
      }

      log.debug('Ran out of attempts...')
      resolve(reason)
  })
));

export { retryOperation };
