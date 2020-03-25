import { Page } from 'puppeteer';

type Resource = string;

const defaultResources = ['stylesheet', 'font', 'image'];

const blockResources = async (
  page: Page,
  resources: Resource[] = defaultResources,
): Promise<void> => {
  await page.setRequestInterception(true);
  page.on('request', (req: any) => {
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

export default blockResources;
