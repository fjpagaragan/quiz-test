import { FC } from "react";
import NextLink from 'next/link'
import { Card, CardBody, Stack, Heading, Text, Image, UnorderedList, ListItem, Button, Box, Flex, Link } from "@chakra-ui/react";
import { Course } from "@quiz/views";

type CourseCardComponentProp = {
    course: Course
}

const CourseCardComponent: FC<CourseCardComponentProp> = (props) => {
    const { course } = props;
    
    return (
        <Card maxW='sm' textAlign={'justify'} rounded={'10'} border={'1px'} borderColor={'#DEE2E6'} mt={8}>
            <CardBody>
                <Image
                src={`${course.image}`}
                borderRadius='lg'
                width={'350px'}
                height={'300px'}
                />
                <Stack mt='6' spacing='3'>
                    <Text fontSize={'24px'} fontWeight={'600'}>
                        {course.title}
                    </Text>
                    <UnorderedList>
                        {course.description.map((value, index) => {
                            return (<ListItem key={index}><Text color={'#152536'} fontSize={'16px'} fontWeight={400}>{value}</Text></ListItem>)
                        })}
                    </UnorderedList>
                </Stack>
                <NextLink href={course.link} target="_blank" passHref>
                <Link as={Button} color={'white'} bg={'#5F2D75'} _hover={{ background: "#5F2D75" }} w={'100%'} mt={3}>Buy Now</Link>
                </NextLink>
                <Text color={'#595959'} fontSize={'14px'} fontWeight={'400'} textAlign={'center'}>
                    {course.access}
                </Text>
            </CardBody>
        </Card>
    );
};

export default CourseCardComponent;