import { logger } from "@/internals";
import { disableLogger } from "@/utils";

describe("with the imported disable-logger module", () => {
  it("should be able to disable the logger", () => {
    disableLogger();

    expect(logger.isEnabled()).toBe(false);
  }, 30000);
});
