const { Signale } = require('signale');

const signale = new Signale()
const log = signale.scope('puppeteer-utilz')

export { log }
