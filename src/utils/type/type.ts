import chalk from 'chalk';
import {
  Frame,
  Page,
} from 'puppeteer';

import {
  logger,
} from 'src/internals';
import {
  click,
} from 'src/utils';

type TypeOptions = {
  selector: string;
  value: string;
  name: string;
};

const type = async (component: Frame | Page, options: TypeOptions) => (
  new Promise(async (resolve, reject) => {
    const {
      selector,
      value,
      name,
    } = options;

    await click({
      component,
      selector,
    });

    logger.debug(chalk`Input name: {green ${name}} | Value: {green ${value}}`);

    await component.type(selector, value, {
      delay: 111,
    })
      .catch(reject);

    resolve(value);
  })
);

export {
  type,
};
