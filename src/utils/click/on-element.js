import { retry } from "..";

export const onElement = async (component) => {
  await component.click();
};

export const onElementWithRetries = async (component, retries) => {
  await retry(
    async () => {
      try {
        await component.click();
      } catch (error) {
        throw new Error(error);
      }
    },
    {
      retries,
    }
  );
};
