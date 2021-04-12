import { Box, Flex } from '@chakra-ui/react';

import { Acasa } from '../components/Acasa/Acasa';

const Index: React.FC = () => {
  return (
    <>

      <Flex width={'100%'} direction='column' alignItems='center'>
        <Box width={'70%'}>
          <Acasa />
        </Box>
      </Flex>
    </>
  );
};

export default Index;
