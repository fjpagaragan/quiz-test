import { FC } from "react";
import { Card, CardBody, Stack, Heading, Text, Image, UnorderedList, ListItem, Button, Box, Flex } from "@chakra-ui/react";

const CourseCardComponent: FC = () => {
    return (
        <Card maxW='sm' textAlign={'justify'} rounded={'10'} border={'1px'} borderColor={'#DEE2E6'} mt={8}>
            <CardBody>
                <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Text fontSize={'24px'} fontWeight={'600'}>
                        B1 Preliminary for Schools
                    </Text>
                    <UnorderedList>
                        <ListItem><Text color={'#152536'} fontSize={'16px'} fontWeight={400}>6 x full Reading exams</Text></ListItem>
                        <ListItem><Text color={'#152536'} fontSize={'16px'} fontWeight={400}>6 x full Listening exams</Text></ListItem>
                        <ListItem><Text color={'#152536'} fontSize={'16px'} fontWeight={400}>6 x full Writing exams with sample answers and examiner notes</Text></ListItem>
                        <ListItem><Text color={'#152536'} fontSize={'16px'} fontWeight={400}>1 x complete Speaking test video with hints and comments</Text></ListItem>
                    </UnorderedList>
                </Stack>
                <Button color={'white'} bg={'#5F2D75'} _hover={{ background: "#5F2D75" }} w={'100%'} mt={3}>Buy Now for $50</Button>
                <Text color={'#595959'} fontSize={'14px'} fontWeight={'400'} textAlign={'center'}>
                    18 months of access - No monthly charges
                </Text>
            </CardBody>
        </Card>
    );
};

export default CourseCardComponent;