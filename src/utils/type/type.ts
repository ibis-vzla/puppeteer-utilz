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
  censor?: boolean;
};

const type = async (window: Frame | Page, options: TypeOptions) => {
  const {
    selector,
    value,
    name,
    censor
  } = options;

  await click({
    component: window,
    selector,
  });

  logger.debug(chalk`Input name: {green ${name}} | Value: {green ${!censor ? value : '[CENSORED]'}}`);

  await window.type(selector, value, {
    delay: 111,
  });

  return value;
};

export {
  type,
};
