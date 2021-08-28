import path from "path";

export const setDownloadPath = async (page, behavior) => {
  await page._client.send("Page.setDownloadBehavior", {
    ...behavior,
    downloadPath: path.resolve(behavior.downloadPath),
  });
};
