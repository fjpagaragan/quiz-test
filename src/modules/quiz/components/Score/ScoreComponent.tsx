import { FC } from "react";
import { 
    Box, 
    Center, 
    Flex, 
    SimpleGrid, 
    Stack, 
    Text 
} from "@chakra-ui/react";
import CourseCardComponent from "./CourseCardComponent";
import { Score } from "@quiz/views";

type ScoreComponentProps = {
    score: Score;
}

const ScoreComponent: FC<ScoreComponentProps> = (props) => {
    const { score } = props;

    return (
        <Flex height={'90vh'} alignContent={'center'} justifyContent={'center'}>
            <Center>
                <Stack as={Box} textAlign={'center'}>
                    <Text color={'#D17A22'} fontSize={'36px'} fontWeight={'500'}>
                        Congratulations!
                    </Text>
                    <Text color={'#5F2D75'} fontSize={'48px'} fontWeight={'400'}>
                    You scored <b>{score.percentage} - {score.label}</b> on the Quiz App - English Exam Quiz!
                    </Text>
                    <Text color={'#262626'} fontSize={'20px'} fontWeight={'500'}>
                        Your performance reflects a strong grasp of English language skills. Keep up the excellent work!
                    </Text>
                    <Text color={'#262626'} fontSize={'20px'} fontWeight={'500'}>
                    Based on your score, here are some personalized recommendations to further enhance your English proficiency:
                    </Text>
                    <Box w={'100%'}>
                        <Center>
                            <SimpleGrid columns={2} spacing={4}>
                                <CourseCardComponent />
                                <CourseCardComponent />
                            </SimpleGrid>
                        </Center>
                    </Box>
                </Stack>
            </Center>
        </Flex>
    )
};

export default ScoreComponent;