import { FC } from "react";
import { AbsoluteCenter, Box, Button, Center, Flex, Heading, Stack, Text } from "@chakra-ui/react";

const HomePage: FC = () => {
    return (
        <Flex height={"90vh"} alignContent={"center"} justifyContent={"center"}>
            <Center>
                <Stack as={Box} textAlign={'center'}>
                    <Heading as="h2" size="xl" mt={6} mb={2}>English Mastery Begins Here</Heading>
                    <Text color={'gray.500'} noOfLines={2}>Immerse yourself in our dynamic quizzes and conquer the challenges of QuizTest English exams.</Text>
                    <Button color={'white'} bg={'#5F2D75'} _hover={{ border: "2px", borderColor: "#5F2D75", background: "white", textColor: "#5F2D75" }}>Begin Your English Journey</Button>
                </Stack>
            </Center>
        </Flex>
    )
};

export default HomePage;