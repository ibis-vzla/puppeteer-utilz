type Resource = string;

const defaultResources = [
  'stylesheet',
  'font',
  'image',
];

const blockResources = (page: any, resources: Resource[] = defaultResources): void => {
  page.on('request', (req: any) => {
    resources.forEach((resource: Resource, index: number) => {
      if (req.resourceType() == resource) {
        req.abort();
      }

      if (index === resources.length - 1) {
        req.continue();
      }
    });
  });
}

export { blockResources };
