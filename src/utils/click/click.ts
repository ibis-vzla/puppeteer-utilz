import {
  ElementHandle,
  Frame,
  Page,
} from 'puppeteer';

import onElement from './on-element';
import onSelector from './on-selector';

async function click(component: ElementHandle): Promise<any>;
async function click(component: Frame | Page, selector: string): Promise<any>;

async function click(component: ElementHandle | Frame | Page, selector?: string) {
  if ((component as ElementHandle).asElement()) {
    onElement(component as ElementHandle);
  } else {
    onSelector(component as Frame | Page, selector as string);
  }
}

export default click;
