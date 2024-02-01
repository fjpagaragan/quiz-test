import { FC } from 'react'
import {
    Box,
    Flex,
    Text,
    useColorModeValue,
    useBreakpointValue,
    HStack,
} from '@chakra-ui/react'


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
            px={4}
        >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
          </HStack>
        </Flex>
        </Box>
    )
}

export default NavBar;
