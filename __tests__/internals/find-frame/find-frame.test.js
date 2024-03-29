import puppeteer from "puppeteer";

import { findFrame } from "@/internals";
import { timeout } from "@/utils";

describe("with the imported find-frame module", () => {
  it("must be possible: look for a frame within an array", async () => {
    expect.hasAssertions();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      "https://allwebco-templates.com/support/S_script_IFrame.htm",
      timeout("10 minutes")
    );

    const array = page.frames();
    const frameName = "Framename";
    const frame = findFrame(array, frameName);
    await browser.close();

    expect(frame?.name()).toBe(frameName);
  });

  it("must be possible: throw undefined if the frame is not found", async () => {
    expect.hasAssertions();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      "https://allwebco-templates.com/support/S_script_IFrame.htm",
      timeout("10 minutes")
    );

    const array = page.frames();
    const frameName = "test";
    const frame = findFrame(array, frameName);
    await browser.close();

    expect(frame).toBe(undefined);
  });
});
