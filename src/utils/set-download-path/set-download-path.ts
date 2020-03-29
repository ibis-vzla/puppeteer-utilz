const setDownloadPath = async (page: any, behavior: any) => {
  await page._client.send('Page.setDownloadBehavior', behavior);
};

export default setDownloadPath;
