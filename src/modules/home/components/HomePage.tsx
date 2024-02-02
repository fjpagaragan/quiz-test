import { FC } from "react";
import { useRouter } from "next/router";
import { AbsoluteCenter, Box, Button, Center, Flex, Heading, Stack, Text } from "@chakra-ui/react";


const HomePage: FC = () => {
    const router = useRouter();
    
    const directToQuizHandler = () => {
        router.push('/overview');
    }

    return (
        <Flex height={"90vh"} alignContent={"center"} justifyContent={"center"}>
            <Center>
                <Stack as={Box} textAlign={'center'}>
                    <Heading as="h2" mt={6} mb={2} fontStyle={'Source Sans Pro'} fontSize={'64px'} fontWeight={700}>English Mastery Begins Here</Heading>
                    <Text color={'gray.500'} fontStyle={'Inter'} fontSize={'28px'} fontWeight={400}>Immerse yourself in our dynamic quizzes and <br />conquer the challenges of University English exams.</Text>
                    <Box>
                        <Button onClick={directToQuizHandler} color={'white'} bg={'#5F2D75'} _hover={{ border: "2px", borderColor: "#5F2D75", background: "white", textColor: "#5F2D75" }}>Begin Your English Journey</Button>
                    </Box>
                </Stack>
            </Center>
        </Flex>
    )
};

export default HomePage;