import { Flex, Heading, Button, Link } from '@chakra-ui/react';
import {
  PlusSquareIcon
} from '@chakra-ui/icons';


export const Acasa: React.FC = () => {

  return (
    <Flex justifyContent='center' alignItems='center' height='50vh' flexDirection='column'>
      <Heading fontSize='5vw'>
        Blockchain crowdfunding
      </Heading>
      <Link my='20px' href={'/profile'}>
      <Button
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            leftIcon={<PlusSquareIcon />}
            _hover={{
              bg: 'pink.300'
            }}
            my={'30px'}
          >
            Donează
          </Button>
      </Link>
    </Flex>
  );
};

export default Acasa;
