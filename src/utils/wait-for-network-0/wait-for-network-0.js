export const waitForNetwork0 = async (page, timeout = 1000) => {
  await new Promise((resolve) => {
    let timer;
    page.on("response", () => {
      clearTimeout(timer);
      timer = setTimeout(resolve, timeout);
    });
  });
};
