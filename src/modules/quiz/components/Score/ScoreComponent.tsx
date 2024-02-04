import { FC, useMemo } from "react";
import { useRouter } from "next/router";
import { 
    Box, 
    Button, 
    Center, 
    Flex, 
    SimpleGrid, 
    Stack, 
    Text 
} from "@chakra-ui/react";
import CourseCardComponent from "./CourseCardComponent";
import { Score } from "@quiz/views";
import { getRecommendedCourse } from "@quiz/transformers";

type ScoreComponentProps = {
    score: Score;
}

const ScoreComponent: FC<ScoreComponentProps> = (props) => {
    const router = useRouter();
    const { score } = props;

    const courses = useMemo(() => {
        console.log(score.label);
        
        return getRecommendedCourse(score.label);
    }, [score]);

    const redirectHomeHandler = () => {
        router.push('/');
    }

    return (
        <Flex alignContent={'center'} justifyContent={'center'}>
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
                            <SimpleGrid columns={courses.length} spacing={4}>
                                {courses.map((course, index) => {
                                    return <CourseCardComponent key={index} course={course} />;
                                })}
                            </SimpleGrid>
                        </Center>
                    </Box>
                    <Text color={'#262626'} fontSize={'20px'} fontWeight={'500'} mt={10}>
                        Explore these courses to refine your skills and reach new heights in your language journey.
                    </Text>
                    <Text color={'#262626'} fontSize={'20px'} fontWeight={'500'}>
                        Remember, continuous learning leads to mastery. Well done, and best of luck on your future quizzes!
                    </Text>
                    <Box mt={5}>
                        <Button 
                            color={'#5F2D75'} 
                            bg={'white'} 
                            border={'1px'} 
                            borderColor={'#5F2D75'} 
                            _hover={{ background: "#5F2D75", textColor: "white" }}
                            w={'30%'}
                            onClick={redirectHomeHandler}
                        >
                            Return Home
                        </Button>
                    </Box>
                </Stack>
            </Center>
        </Flex>
    )
};

export default ScoreComponent;