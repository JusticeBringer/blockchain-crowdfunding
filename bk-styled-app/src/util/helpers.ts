import { useRouter } from 'next/router';
import { useColorMode } from '@chakra-ui/react';

// this function returns true if theme is light and viceversa
export const reversedMode = (): boolean => useColorMode().colorMode === 'light';

// this function returns true for the page we should show as active
export const shouldBeActive = (pageName: string): boolean => {
  const router = useRouter();
  if (router.pathname === '/' && pageName === 'Acasă') {
    return true;
  }

  return router.pathname.startsWith(pageName);
  // for another use case: router.pathname.split('?')[0] === pageName;
};

export default { reversedMode, shouldBeActive };
