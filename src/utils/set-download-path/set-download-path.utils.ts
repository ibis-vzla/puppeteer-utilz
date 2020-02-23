const setDownloadPath = async (page: any, downloadBehaviour: any) => {
  await page._client.send('Page.setDownloadBehavior', downloadBehaviour);
};

export { setDownloadPath }
