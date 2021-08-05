const defaultResources = ["stylesheet", "font", "image"];

export const blockResources = async (page, resources = defaultResources) => {
  await page.setRequestInterception(true);

  page.on("request", (req) => {
    resources.forEach((resource, index) => {
      if (req.resourceType() === resource) {
        req.abort();
      }

      if (index === resources.length - 1) {
        req.continue();
      }
    });
  });
};
