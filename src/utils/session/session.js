import * as fs from "fs";

const writeCookies = async (page, p) => {
  const client = await page.target().createCDPSession();
  const cookies = (await client.send("Network.getAllCookies"))["cookies"];
  fs.writeFileSync(p, JSON.stringify(cookies));
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
  fs.writeFileSync(p, JSON.stringify(json));
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
  fs.writeFileSync(p, JSON.stringify(json));
};

const restoreSessionStorage = async (page, p) => {
  let json = JSON.parse(fs.readFileSync(p));
  await page.evaluate((json) => {
    sessionStorage.clear();
    for (let key in json) sessionStorage.setItem(key, json[key]);
  }, json);
};

const removeFilesInPaths = async (paths = []) => {
  try {
    paths.forEach((p) => {
      fs.unlinkSync(p);
    });
  } catch (err) {
    console.error(err);
  }
};

const getDerivedSavedSessionPaths = (path) => {
  return {
    cookiesPath: `/tmp/${path}-cookies.txt`,
    localStoragePath: `/tmp/${path}-localstorage.json`,
    sessionStoragePath: `/tmp/${path}-sessionstorage.json`,
  };
};

export const saveSession = async (page, path) => {
  const { cookiesPath, localStoragePath, sessionStoragePath } =
    getDerivedSavedSessionPaths(path);

  await Promise.all([
    writeCookies(page, cookiesPath),
    writeLocalStorage(page, localStoragePath),
    writeSessionStorage(page, sessionStoragePath),
  ]);
};

export const restoreSession = async (page, path) => {
  const { cookiesPath, localStoragePath, sessionStoragePath } =
    getDerivedSavedSessionPaths(path);

  await Promise.all([
    restoreCookies(page, cookiesPath).catch(() => {}),
    restoreLocalStorage(page, localStoragePath).catch(() => {}),
    restoreSessionStorage(page, sessionStoragePath).catch(() => {}),
  ]);
};

export const resetSession = (path) => {
  const { cookiesPath, localStoragePath, sessionStoragePath } =
    getDerivedSavedSessionPaths(path);

  removeFilesInPaths([cookiesPath, localStoragePath, sessionStoragePath]);
};
