import {
  Box,
  Flex,
  Stack,
} from '@chakra-ui/react';

import DarkModeSwitch from '../../styles/DarkModeSwitch';
import { Logo } from '../Header/Logo';

export function Header(): JSX.Element {
  return (
    <Box w={'100%'} pb={4}>
      <Flex
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}
        boxShadow={'0px 0px 5px #888, 0px 0px 2px #888;'}
      >
        <Flex flex={{ base: 5 }} justify={['start']}>
          <Logo/>
        </Flex>

        <Stack flex={[1]} justify={'flex-end'} direction={'row'} justifyItems={'right'}>
          <DarkModeSwitch />
        </Stack>
      </Flex>
    </Box>
  );
}


export default Header;
