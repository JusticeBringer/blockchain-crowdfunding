import NextLink from 'next/link';

import { Link as ChakraLink, Text, Flex, Icon } from '@chakra-ui/react';

import { FOOTER_ITEMS } from './FooterItems';
import theme from '../../styles/theme';
import { reversedMode, shouldBeActive } from '../../util/helpers';

type MobileFooterProps = {
};

export const MobileFooter: React.FC<MobileFooterProps> = (props: MobileFooterProps) => {

  return (
    <Flex
      flexDirection='row'
      position='fixed'
      bottom='0'
      width='100%'
      py={2}
      justifyContent={'space-evenly'}
      boxShadow={'0px 0px 5px #888, 0px 0px 2px #888;'}
      visibility={['visible', 'visible', 'hidden']}
    >
      <FooterNav />
    </Flex>
  );
};

const FooterNav = () => {
  return (
    <>
      {FOOTER_ITEMS.map(navItem => (
        <NextLink href={navItem.href} key={navItem.label} passHref>
          <ChakraLink textAlign={'center'}>
            <Icon
              as={navItem.icon}
              color={
                shouldBeActive(navItem.label)
                  ? reversedMode()
                    ? `${theme.colors.redDark[500]}`
                    : `${theme.colors.redDark[200]}`
                  : ''
              }
              w={['10', '12']}
              h={['10', '12']}
            />
            <Text fontSize={['12', '15', '18']}>{navItem.label}</Text>
          </ChakraLink>
        </NextLink>
      ))}
    </>
  );
};

export default MobileFooter;
