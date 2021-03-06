import chalk from 'chalk';
import {
  Frame,
  Page,
} from 'puppeteer';

import {
  logger,
} from '../../internals';
import {
  click,
} from '../';

type TypeOptions = {
  selector: string;
  value: string;
  name: string;
};

const type = async (window: Frame | Page, options: TypeOptions) => {
  const {
    selector,
    value,
    name,
  } = options;

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

export {
  type,
};
