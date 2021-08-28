import fs from "fs";
import puppeteer from "puppeteer";

import { setDownloadPath, timeout, waitForDownload, click } from "@/utils";

import {
  downloadUrl,
  downloadSelector,
  downloadFilename,
} from "../../constants";

describe("with the imported wait-for-download module", () => {
  it("must be possible: wait for a download to complete", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(downloadUrl, timeout("10 minutes"));

    const downloadPath = "./1-test-folder";
    await setDownloadPath(page, {
      behavior: "allow",
      downloadPath,
    });
    await click({
      component: page,
      selector: downloadSelector,
    });

    const filename = await waitForDownload(downloadPath);
    await browser.close();

    expect(filename).toBe(downloadFilename);
  });

  it(`shouldn't be possible to download 10 Gbit file in 1 second`, async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(downloadUrl, timeout("10 minutes"));

    const downloadPath = "./2-test-folder";
    await setDownloadPath(page, {
      behavior: "allow",
      downloadPath,
    });
    await click({
      component: page,
      selector: downloadSelector,
    });

    const filename = await waitForDownload(downloadPath, 1000);
    await browser.close();

    expect(filename).toBe(false);
  });
});

afterAll(() => {
  fs.rmdirSync("./1-test-folder", { recursive: true });
  fs.rmdirSync("./2-test-folder", { recursive: true });
});
