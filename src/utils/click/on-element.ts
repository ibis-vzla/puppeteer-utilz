import {
  ElementHandle,
} from 'puppeteer';

const onElement = async (component: ElementHandle) => {
  await component.click();
};

export default onElement;
