export const setDownloadPath = async (page, behavior) => {
  await page._client.send("Page.setDownloadBehavior", behavior);
};
