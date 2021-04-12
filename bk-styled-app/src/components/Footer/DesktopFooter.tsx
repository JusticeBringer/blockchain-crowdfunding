import NextLink from 'next/link';

import { useState } from 'react';

import { Link as ChakraLink, Text, Flex, Box, Icon } from '@chakra-ui/react';

import { FOOTER_ITEMS } from './FooterItems';
import theme from '../../styles/theme';
import { reversedMode, shouldBeActive } from '../../util/helpers';

type DesktopFooterProps = {
};

export const DesktopFooter: React.FC<DesktopFooterProps> = (props: DesktopFooterProps) => {

  return (
    <Flex
      flexDirection='column'
      position='fixed'
      top={'50%'}
      transform={'translateY(-50%)'}
      justifyContent={'space-evenly'}
      visibility={['hidden', 'hidden', 'visible']}
    >
      <DesktopNav />
    </Flex>
  );
};

const DesktopNav = () => {
  const [showLabel, setShowLabel] = useState(false);

  return (
    <Box
      borderLeft={'4px solid'}
      ml={3}
      borderLeftColor={
        reversedMode() ? `${theme.colors.redDark[500]}` : `${theme.colors.redDark[200]}`
      }
      transition={'width 2s'}
    >
      {FOOTER_ITEMS.map(navItem => (
        <NextLink href={navItem.href} key={navItem.label} passHref>
          <ChakraLink
            display={'flex'}
            flexDirection='row'
            textAlign={'center'}
            transitionTimingFunction={'ease-in-out'}
          >
            <Flex
              alignItems={'center'}
              onMouseEnter={() => setShowLabel(true)}
              onMouseLeave={() => setShowLabel(false)}
            >
              <Icon
                as={navItem.icon}
                color={
                  shouldBeActive(navItem.label)
                    ? reversedMode()
                      ? `${theme.colors.redDark[500]}`
                      : `${theme.colors.redDark[200]}`
                    : ''
                }
                bg={
                  reversedMode()
                    ? `${theme.colors.primaryDark[200]}`
                    : `${theme.colors.primaryDark[500]}`
                }
                borderTopRightRadius={10}
                borderBottomRightRadius={10}
                w={['', '', '60px', '70px']}
                h={['', '', '60px', '70px']}
                py={'8px'}
              />
              {showLabel && (
                <Text pl={2} fontSize={['', '', '18px', '20px']}>
                  {navItem.label}
                </Text>
              )}
            </Flex>
          </ChakraLink>
        </NextLink>
      ))}
    </Box>
  );
};

export default DesktopFooter;
