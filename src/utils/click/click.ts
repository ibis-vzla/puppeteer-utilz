import {
  ElementHandle,
  Frame,
  Page,
} from 'puppeteer';

import {
  onElement,
  onElementWithRetries,
} from './on-element';
import {
  onSelector,
  onSelectorWithRetries,
} from './on-selector';

type ClickOptions = {
  component: ElementHandle | Frame | Page;
  selector?: string;
  retries?: number;
};

const click = async (options: ClickOptions) => {
  const {
    component,
    selector,
    retries,
  } = options;

  if (typeof (component as ElementHandle).asElement === 'function') {
    if (retries) {
      onElementWithRetries(component as ElementHandle, retries);
    } else {
      onElement(component as ElementHandle);
    }
  } else {
    if (retries) {
      onSelectorWithRetries(component as Frame | Page, selector as string, retries);
    } else {
      onSelector(component as Frame | Page, selector as string);
    }
  }
};

export {
  click,
};
