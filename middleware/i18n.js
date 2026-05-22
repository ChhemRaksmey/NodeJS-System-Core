const path = require('path');
const en = require('../locales/en.json');
const km = require('../locales/km.json');

const supportedLocales = { en, km };
const defaultLocale = 'en';

function parseCookies(cookieHeader = '') {
  return cookieHeader.split(';').reduce((cookies, pair) => {
    const [name, ...rest] = pair.split('=');
    const value = rest.join('=').trim();
    if (!name) return cookies;
    cookies[name.trim()] = decodeURIComponent(value);
    return cookies;
  }, {});
}

function initI18n(app) {
  app.use((req, res, next) => {
    let lang = defaultLocale;
    const cookies = parseCookies(req.headers.cookie || '');

    if (req.query.lang && supportedLocales[req.query.lang]) {
      lang = req.query.lang;
      res.cookie('locale', lang, { maxAge: 31536000000, httpOnly: false, sameSite: 'Lax', path: '/' });
    } else if (cookies.locale && supportedLocales[cookies.locale]) {
      lang = cookies.locale;
    } else if (req.headers['accept-language']) {
      const browserLang = req.headers['accept-language'].split(',')[0].trim().split('-')[0];
      if (supportedLocales[browserLang]) {
        lang = browserLang;
      }
    }

    res.locals.lang = lang;
    res.locals.currentLang = lang;

    res.locals.__ = (key, fallback) => {
      if (!key) return '';
      const keys = key.split('.');
      let value = supportedLocales[lang];
      for (const part of keys) {
        if (!value || typeof value !== 'object') {
          value = undefined;
          break;
        }
        value = value[part];
      }
      if (typeof value === 'string') {
        return value;
      }
      return typeof fallback === 'string' ? fallback : key;
    };

    res.locals.changeLocaleUrl = (locale) => {
      const origin = `${req.protocol}://${req.get('host')}`;
      const url = new URL(req.originalUrl, origin);
      url.searchParams.set('lang', locale);
      return url.pathname + url.search;
    };

    next();
  });
}

module.exports = initI18n;
