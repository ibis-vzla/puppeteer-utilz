import {
  waitForDownload,
} from '../../../src';

describe('with the imported wait-for-download module', () => {
  it('must be possible: wait for a download to complete', async () => {
    expect.hasAssertions();

    const url = 'http://ovh.net/files/1Mb.dat';
    const filename = await waitForDownload('~/test');

    expect(filename).toBe('1Mb.dat');
  }, 30000);
});
