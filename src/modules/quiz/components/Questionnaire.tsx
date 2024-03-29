import { Dispatch, FC, SetStateAction, useMemo, useState } from "react";
import { 
    Box, 
    Flex, 
    Center, 
    Stack, 
    Text, 
    Heading, 
    IconButton, 
    Grid,
    GridItem,
    Button
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { ChoicesRadioGroup } from "@quiz/components/ChoicesRadioGroup";
import { getQuestionLength } from "@quiz/transformers";

interface QuestionnaireProps {
    label: string;
    category: string;
    question: string;
    choices: string[];
    answer: string | null;
    stepper: number;
    setStepper: Dispatch<SetStateAction<number>>;
    onAnswer: (answer: string) => void;
    onSubmit: () => void;
}


const Quiestionnaire: FC<QuestionnaireProps> = (props) => {
    const { category, question, choices, answer, onAnswer, stepper, setStepper, onSubmit} = props;
    const questionsLength: number = getQuestionLength();
    const hasNextQuestion = useMemo(() => {
        return questionsLength - 1 > stepper;
    }, [stepper, questionsLength]);

    return (
        <Flex h={{ 'md': '90vh'}} mt={'60px'} alignContent={'center'} justifyContent={'center'}>
            <Center>
                <Stack as={Box} textAlign={'center'} alignItems={'center'} width={'90%'}>
                    <Text color={'#D17A22'} fontSize={'20px'}>{category}</Text>
                    <Heading width={'70%'} color={'#5F2D75'} fontWeight={'600'} fontSize={'48px'} mr={'50px'} ml={'50px'}>
                        {question}
                    </Heading>
                    <Box width={'100%'}>
                        <Grid gap={4}>
                            <GridItem>
                                {stepper > 0 && 
                                <IconButton
                                    isRound={true}
                                    variant='outline'
                                    color={'#5F2D75'} 
                                    borderColor={'#5F2D75'}
                                    _hover={{ border: "1px", borderColor: "#5F2D75", background: "#5F2D75", textColor: "white"}}
                                    aria-label='Previous'
                                    fontSize='20px'
                                    icon={<ChevronLeftIcon />}
                                    onClick={() => { setStepper(stepper - 1)}}
                                />}
                            </GridItem>
                            <GridItem colEnd={6}>
                            {hasNextQuestion &&<IconButton
                                    isRound={true}
                                    variant='outline'
                                    color={'#5F2D75'} 
                                    borderColor={'#5F2D75'}
                                    _hover={{ border: "1px", borderColor: "#5F2D75", background: "#5F2D75", textColor: "white"}}
                                    aria-label='Next'
                                    fontSize='20px'
                                    icon={<ChevronRightIcon />}
                                    onClick={() => { setStepper(stepper + 1)}}
                                />}
                            </GridItem>
                        </Grid>
                    </Box>
                    <Box width={{ 'md':'70%'}}>
                        <ChoicesRadioGroup options={choices} value={answer} onChange={onAnswer} />
                    </Box>
                    <Text mt={10} color={'#848FA5'} fontSize={'16px'} fontWeight={'500'}>
                        {stepper + 1} / {questionsLength}
                    </Text>
                    {!hasNextQuestion && 
                        <Button 
                            w={'30%'} 
                            color={'white'} 
                            bg={'#5F2D75'} 
                            _hover={{ border: "1px", borderColor: "#5F2D75", background: "#5F2D75", textColor: "white" }}
                            onClick={onSubmit}
                        >
                            Submit
                        </Button>
                    }
                </Stack>
            </Center>
        </Flex>
    )
}

export default Quiestionnaire;