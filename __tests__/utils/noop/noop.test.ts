import { noop } from '../../../src';

test('noop shouldn\'t do anything', () => {
  expect(noop()).toBe(undefined);
});