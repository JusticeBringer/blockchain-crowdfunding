import { Text } from '@chakra-ui/react';

type Props = {
};

export const Logo: React.FC<Props> = (props: Props) => {

  return (
    <Text display={['flex']} fontFamily={'heading'} >
      Blockchain Logo
    </Text>
  );
};

export default Logo;
