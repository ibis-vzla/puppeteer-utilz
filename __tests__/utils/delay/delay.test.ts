import { delay } from '../../../src';

const time = 100; // ms

test('delay is somewhat accurate', async () => {
  const start = process.hrtime();
  await delay(time);
  const end = process.hrtime(start)[1] / 1000000;
  expect(end).toBeLessThanOrEqual(105);
});
