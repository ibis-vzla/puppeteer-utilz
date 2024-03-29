import puppeteer from "puppeteer";

import { findElement, timeout } from "@/utils";

describe("with the imported find-element module", () => {
  it("must be possible: find an element by content", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://validator.w3.org/", timeout("10 minutes"));

    const element = await findElement(
      page,
      "span",
      "textContent",
      "Markup Validation Service"
    );
    await browser.close();

    expect(element._remoteObject.subtype).not.toBe("null");
  });

  it(`should return null if element isn't found`, async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://validator.w3.org/", timeout("10 minutes"));

    const element = await findElement(
      page,
      "span",
      "textContent",
      "xMarkup Validation Service"
    );
    await browser.close();

    expect(element._remoteObject.subtype).toBe("null");
  });
});
