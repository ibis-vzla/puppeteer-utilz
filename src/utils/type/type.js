import chalk from "chalk";

import { click } from "..";
import { logger } from "../../internals";

export const type = async (window, options) => {
  const { selector, value, name } = options;

  await click({
    component: window,
    selector,
  });

  logger.debug(chalk`Input name: {green ${name}} | Value: {green ${value}}`);

  await window.type(selector, value, {
    delay: 111,
  });

  return value;
};
