import { useRadio, Button, useRadioGroup, HStack, Stack, SimpleGrid } from "@chakra-ui/react";

const CustomRadioButton = (props: any) => {
    const { getInputProps, getRadioProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getRadioProps();
  
    return (
      <Button
        as="label"
        {...checkbox}
        color={props.isChecked ? 'white' : '#5F2D75'}
        border={'1px'}
        borderColor={'#5F2D75'}
        background={props.isChecked ? '#5F2D75' : 'white'}
        variant={props.isChecked ? 'outline' : 'solid'}
        _hover={{ border: "1px", borderColor: "#5F2D75", background: "#5F2D75", textColor: "white"}}
        borderRadius="md"
        userSelect="none"
        cursor="pointer"
        _focus={{ boxShadow: 'outline' }}
      >
        <input {...input} />
        {props.children}
      </Button>
    );
}

// Custom Radio Group component
export const ChoicesRadioGroup = (props: any) => {
    const { getRootProps, getRadioProps } = useRadioGroup(props);
  
    const group = getRootProps();
  
    return (
      <SimpleGrid  columns={{'sm': 1, 'md': 2}} spacing={4} {...group}>
        {props.options.map((value: any) => {
          const radio = getRadioProps({ value });
          return (
            <CustomRadioButton key={value} {...radio}>
              {value}
            </CustomRadioButton>
          );
        })}
      </SimpleGrid >
    );
  };