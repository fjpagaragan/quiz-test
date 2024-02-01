import { FC } from "react";
import { AbsoluteCenter, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

const HomePage: FC = () => {
    return (
        <Flex>
        <Box h={'100vh'}>
            <AbsoluteCenter axis="both" className="text-center">
                <Box m={2}>
                    <Heading as='h1' noOfLines={1}>English Mastery Begins Here</Heading>
                </Box>
                <Box m={2}>
                    <Text fontSize={'lg'} noOfLines={2} color={'gray'}>Immerse yourself in our dynamic quizzes and conquer the challenges of Cambridge English exams.</Text>
                </Box>
                <Box m={2}>
                    <Button color={'white'} bg={'#5F2D75'}>Begin Your English Journey</Button>
                </Box>
            </AbsoluteCenter>
        </Box>
        </Flex>
    )
};

export default HomePage;