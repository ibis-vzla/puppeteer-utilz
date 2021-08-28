import { launchBrowser } from "@/utils";

describe("with the imported launch-browser module", () => {
  it("must be possible: set an environment", async () => {
    const context = await launchBrowser("https://validator.w3.org/");
    const browser = context?.browser;
    const page = context?.page;

    const url = page?.url();
    await browser?.close();

    expect(url).toBe("https://validator.w3.org/");
  });
});
