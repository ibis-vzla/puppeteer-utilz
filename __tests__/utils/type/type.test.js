import puppeteer from "puppeteer";

import { timeout, type } from "@/utils";

describe("with the imported type module", () => {
  it("must be possible: type into input", async () => {
    expect.hasAssertions();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://validator.w3.org/", timeout("10 minutes"));

    const typed = await type(page, {
      selector: "input#uri",
      value: "jest",
      name: "uri",
    });
    await browser.close();

    expect(typed).toBe("jest");
  });

  it("must be possible: throw Error if selector not found", async () => {
    expect.hasAssertions();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://validator.w3.org/", timeout("10 minutes"));

    let typed;
    try {
      typed = await type(page, {
        selector: "test",
        value: "jest",
        name: "test",
      });
    } catch (e) {
      typed = e;
    }

    await browser.close();

    expect(typed).not.toBe("jest");
  });
});
