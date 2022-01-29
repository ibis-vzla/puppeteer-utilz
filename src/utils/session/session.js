import * as fs from "fs";

const writeCookies = async (page, p) => {
  const client = await page.target().createCDPSession();
  const cookies = (await client.send("Network.getAllCookies"))["cookies"];
  try {
    fs.writeFileSync(p, JSON.stringify(cookies));
  } catch (err) {}
};

const restoreCookies = async (page, p) => {
  try {
    let buf = fs.readFileSync(p);
    let cookies = JSON.parse(buf);
    await page.setCookie(...cookies);
  } catch (err) {}
};

const writeLocalStorage = async (page, p) => {
  const json = await page.evaluate(() => {
    let json = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      json[key] = localStorage.getItem(key);
    }
    return json;
  });
  try {
    fs.writeFileSync(p, JSON.stringify(json));
  } catch (err) {}
};

const restoreLocalStorage = async (page, p) => {
  let json = JSON.parse(fs.readFileSync(p));
  await page.evaluate((json) => {
    localStorage.clear();
    for (let key in json) localStorage.setItem(key, json[key]);
  }, json);
};

const writeSessionStorage = async (page, p) => {
  const json = await page.evaluate(() => {
    let json = {};
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      json[key] = sessionStorage.getItem(key);
    }
    return json;
  });
  try {
    fs.writeFileSync(p, JSON.stringify(json));
  } catch (err) {}
};

const restoreSessionStorage = async (page, p) => {
  let json = JSON.parse(fs.readFileSync(p));
  await page.evaluate((json) => {
    sessionStorage.clear();
    for (let key in json) sessionStorage.setItem(key, json[key]);
  }, json);
};

const removeFilesInPaths = (paths = []) => {
  paths.forEach((p) => {
    try {
      fs.unlinkSync(p);
    } catch (err) {}
  });
};

const getDerivedSavedSessionPaths = (path) => {
  return {
    cookiesPath: `/tmp/${path}-cookies.txt`,
    localStoragePath: `/tmp/${path}-localstorage.json`,
    sessionStoragePath: `/tmp/${path}-sessionstorage.json`,
  };
};

export const saveSession = async (page, path) => {
  const {
    cookiesPath,
    localStoragePath,
    sessionStoragePath,
    // TODO: cache storage
  } = getDerivedSavedSessionPaths(path);

  return Promise.all([
    writeCookies(page, cookiesPath),
    writeLocalStorage(page, localStoragePath),
    writeSessionStorage(page, sessionStoragePath),
  ]);
};

export const restoreSession = async (page, path) => {
  const {
    cookiesPath,
    localStoragePath,
    sessionStoragePath,
  } = getDerivedSavedSessionPaths(path);

  return Promise.all([
    restoreCookies(page, cookiesPath).catch(() => {}),
    restoreLocalStorage(page, localStoragePath).catch(() => {}),
    restoreSessionStorage(page, sessionStoragePath).catch(() => {}),
  ]);
};

export const clearSession = (path) => {
  const {
    cookiesPath,
    localStoragePath,
    sessionStoragePath,
  } = getDerivedSavedSessionPaths(path);

  removeFilesInPaths([cookiesPath, localStoragePath, sessionStoragePath]);
};
