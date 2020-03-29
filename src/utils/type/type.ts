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
} from '../../utils';

type TypeOptions = {
  selector: string;
  value: string;
  name: string;
};

const type = async (component: Frame | Page, options: TypeOptions) => {
  const {
    selector,
    value,
    name,
  } = options;

  await click(component, selector);

  logger.debug(chalk`Input name: {green ${name}} | Value: {green ${value}}`);

  await component.type(selector, value, {
    delay: 111,
  });
};

export default type;
