import puppeteer from "puppeteer";

import { timeout, waitForURL } from "@/utils";

describe("with the imported wait-for-url module", () => {
  it("must be possible: wait for a redirect", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.fb.com/", timeout("10 minutes"));

    const areURLsSame = await waitForURL(page, "https://www.facebook.com/");
    await browser.close();

    expect(areURLsSame).toBe(true);
  });

  it(`shouldn't be possible to redirect in 100 milliseconds`, async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.fb.com/", timeout("10 minutes"));

    const areURLsSame = await waitForURL(
      page,
      "https://www.facebook.com/",
      100
    );
    await browser.close();

    expect(areURLsSame).toBe(false);
  });
});
