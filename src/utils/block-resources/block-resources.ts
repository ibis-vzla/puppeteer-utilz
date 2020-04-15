import {
  Page,
} from 'puppeteer';

const defaultResources = [
  'stylesheet',
  'font',
  'image',
];

const blockResources = async (page: Page, resources: Resource[] = defaultResources) => {
  await page.setRequestInterception(true);

  page.on('request', req => {
    resources.forEach((resource: Resource, index: number) => {
      if (req.resourceType() === resource) {
        req.abort();
      }

      if (index === resources.length - 1) {
        req.continue();
      }
    });
  });
};

export {
  blockResources,
};
