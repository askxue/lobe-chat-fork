import UAParser from 'ua-parser-js';

const getParser = () => {
  if (typeof window === 'undefined') {return new UAParser('Node');}

  const ua = navigator.userAgent;
  return new UAParser(ua);
};

export const getPlatform = () => getParser().getOS().name;

export const getBrowser = () => getParser().getResult().browser.name;

export const browserInfo = {
  browser: getBrowser(),
  isMobile: getParser().getDevice().type === 'mobile',
  os: getParser().getOS().name
};

export const isMacOS = () => getPlatform() === 'Mac OS';
