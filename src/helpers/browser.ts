import {
  isChrome,
  isEdge,
  isSafari,
  isFirefox,
  isOpera
} from 'react-device-detect';

export function getBrowser() {
  if (isChrome) return 'Chrome';
  if (isEdge) return 'Edge';
  if (isSafari) return 'Safari';
  if (isFirefox) return 'Firefox';
  if (isOpera) return 'Opera';
  return 'other';
}
