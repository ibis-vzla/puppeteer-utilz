import { asyncForEach, delay } from "@/utils";

describe("with the imported async-foreach module", () => {
  it("must be possible to execute async functions", async () => {
    expect.hasAssertions();

    let expectedNumber = 0;

    const array = [100, 200, 100, 100, 200];
    const callback = async (element) => {
      const hrStart = process.hrtime();
      await delay(element);
      const hrEnd = process.hrtime(hrStart)[1] / 1000000;
      expectedNumber += hrEnd;
    };

    await asyncForEach(array, callback);

    expect(expectedNumber).toBeLessThanOrEqual(1000);
  });
});
