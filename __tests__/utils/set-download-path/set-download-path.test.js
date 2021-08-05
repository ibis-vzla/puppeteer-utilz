import fs from "fs";
import puppeteer from "puppeteer";

import { delay, setDownloadPath, timeout, click } from "@/utils";

import { downloadUrl, downloadSelector } from "../../constants";

describe("with the imported set-download-path module", () => {
  it("must be possible: set a download path", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(downloadUrl, timeout("10 minutes"));

    const downloadPath = "./download-path-test";
    await setDownloadPath(page, {
      behavior: "allow",
      downloadPath,
    });
    await click({
      component: page,
      selector: downloadSelector,
    });
    await delay("5 seconds");

    await browser.close();

    expect(fs.existsSync(downloadPath)).toBe(true);
  });
});

afterAll(() => {
  fs.rmdirSync("./download-path-test", { recursive: true });
});
