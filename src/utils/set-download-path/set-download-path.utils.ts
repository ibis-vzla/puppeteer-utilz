const setDownloadPath = async (page: any, downloadPath: string) => {
  const behavior = 'allow';

  const downloadBehaviorConfig = {
    behavior,
    downloadPath,
  };

  await page._client.send('Page.setDownloadBehavior', downloadBehaviorConfig);
};

export { setDownloadPath };
