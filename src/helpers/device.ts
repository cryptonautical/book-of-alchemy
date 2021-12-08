import { isMobile, isTablet, isDesktop } from 'react-device-detect';

export function getDevice() {
  if (isMobile) return 'Mobile';
  if (isTablet) return 'Tablet';
  if (isDesktop) return 'Desktop';
  return 'other';
}
