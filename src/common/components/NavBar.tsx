import { FC } from 'react'
import {
    Box,
    Flex,
    useColorModeValue,
    HStack,
} from '@chakra-ui/react'
import Logo from 'common/images/Logo';


const NavBar: FC = () => {
    return (
        <Box 
            position="fixed" 
            top="0" 
            right="0" 
            w={'100%'} 
            h={'60px'}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
            background={'white'}
            px={4}
        >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box data-testid="logo-test-component"><Logo/></Box>
            <HStack as={'nav'} spacing={4} display={'flex'}>
              <Box as="a" px={2} py={1} rounded={'md'} color={'#595959'} fontStyle={'Inter'} fontSize={'16px'} fontWeight={400} _hover={{textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700'),}} href={'/'}>
                Home
              </Box>
              {/* <Box as="a" px={2} py={1} rounded={'md'} color={'#595959'} fontStyle={'Inter'} fontSize={'16px'} fontWeight={400} _hover={{textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700'),}} href={'/overview'}>
                Quiz
              </Box> */}
            </HStack>
          </HStack>
        </Flex>
        </Box>
    )
}

export default NavBar;
