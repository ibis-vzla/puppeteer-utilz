import fs from "fs";
import puppeteer from "puppeteer";

import { delay, findElement, setDownloadPath, timeout } from "@/utils";

describe("with the imported set-download-path module", () => {
  it("must be possible: set a download path", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://ovh.net/files/", timeout("10 minutes"));

    const downloadPath = "./download-path-test";
    await setDownloadPath(page, {
      behavior: "allow",
      downloadPath,
    });
    const element = await findElement(page, "a", "textContent", "1 Mbit file");
    await element.click();
    await delay("5 seconds");

    await browser.close();

    expect(fs.existsSync(downloadPath)).toBe(true);
  });
});
