import { FC, useState } from "react";
import { 
    Box, 
    Flex, 
    Center, 
    Stack, 
    Text, 
    Heading, 
    IconButton, 
    Grid,
    GridItem
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { ChoicesRadioGroup } from "./ChoicesRadioGroup";


const Quiestionnaire: FC = () => {
    const options = ["Option 1", "Option 2", "Option 3" , "Option 4"];
    const [value, setValue] = useState(null);

    return (
        <Flex height={'90vh'} alignContent={'center'} justifyContent={'center'}>
            <Center>
                <Stack as={Box} textAlign={'center'} alignItems={'center'} width={'80%'}>
                    <Text color={'#D17A22'} fontSize={'20px'}>Reading Comprehension</Text>
                    <Heading color={'#5F2D75'} fontWeight={'600'} fontSize={'48px'} mr={'50px'} ml={'50px'}>
                        What is one of the positive effects of regular exercise mentioned in the passage?
                    </Heading>
                    <Box width={'100%'}>
                        <Grid gap={4}>
                            <GridItem>
                                <IconButton
                                    isRound={true}
                                    variant='outline'
                                    color={'#5F2D75'} 
                                    borderColor={'#5F2D75'}
                                    _hover={{ border: "1px", borderColor: "#5F2D75", background: "#5F2D75", textColor: "white"}}
                                    aria-label='Previous'
                                    fontSize='20px'
                                    icon={<ChevronLeftIcon />}
                                />
                            </GridItem>
                            <GridItem colEnd={6}>
                                <IconButton
                                    isRound={true}
                                    variant='outline'
                                    color={'#5F2D75'} 
                                    borderColor={'#5F2D75'}
                                    _hover={{ border: "1px", borderColor: "#5F2D75", background: "#5F2D75", textColor: "white"}}
                                    aria-label='Next'
                                    fontSize='20px'
                                    icon={<ChevronRightIcon />}
                                />
                            </GridItem>
                        </Grid>
                    </Box>
                    <Box width={'70%'}>
                        <ChoicesRadioGroup options={options} value={value} onChange={setValue} />
                    </Box>
                </Stack>
            </Center>
        </Flex>
    )
}

export default Quiestionnaire;