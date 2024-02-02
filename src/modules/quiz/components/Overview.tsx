import { FC } from "react";
import { Box, Button, Flex, Heading, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";

const Overview: FC = () => {
    return (
        <Flex alignContent={'center'} >
            <Stack as={Box} m={'100px'}>
                <Heading as={'h2'} size={'2xl'} color={'#D17A22'}>
                    Quiz App - Reading Proficiency
                </Heading>
                <Text color={'gray.500'} size={'1xl'} mt={2}>
                Welcome to the B2 First Reading Proficiency quiz! This exam assesses your ability to understand written English in various contexts.
                <br />Questions cover a range of topics, from everyday scenarios to more complex texts.
                </Text>
                <Text color={'#595959'} fontWeight={'bold'} mt={5}>
                What to Expect:
                </Text>
                <UnorderedList color={'gray.500'} paddingLeft={2}>
                    <ListItem>Reading passages with comprehension questions.</ListItem>
                    <ListItem>Tasks that evaluate your ability to identify main ideas, details, and opinions.</ListItem>
                    <ListItem>Focus on vocabulary, grammar, and overall reading skills.</ListItem>
                </UnorderedList>
                <Text color={'#595959'} fontWeight={'bold'} mt={5}>
                Challenge Yourself:
                </Text>
                <Text color={'gray.500'} mt={2}>
                This quiz is designed to simulate the Reading Proficiency exam environment, allowing you to gauge your readiness and identify areas for improvement.
                </Text>
                <Box mt={'10px'}>
                    <Button 
                        color={'#5F2D75'} 
                        borderColor={'#5F2D75'} 
                        variant={'outline'} 
                        _hover={{ border: "1px", borderColor: "#5F2D75", background: "#5F2D75", textColor: "white"}}
                        w={{ base: '100%', md: '20%', lg: '30%'}}
                    >
                        Start Quiz
                    </Button>
                </Box>
            </Stack>
        </Flex>
    )
}

export default Overview;