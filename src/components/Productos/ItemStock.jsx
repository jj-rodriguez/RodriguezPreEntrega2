import { Button, Flex, HStack, Input, Text, useNumberInput } from "@chakra-ui/react"

const ItemStock = ({stock}) => {

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
  useNumberInput({
    step: 1,
    defaultValue: 0,
    min: 0,
    max: stock,
  })

const inc = getIncrementButtonProps()
const dec = getDecrementButtonProps()
const input = getInputProps()

  return( 
    <>
    <Flex direction='column' gap='6' width='100%' alignItems='center'> 
      <Text fontSize='2xl'>Stock: {stock}</Text>
      <Flex direction='column' alignItems='center' gap='2'>
        <Text fontSize='2xl'>Cantidad</Text>
        <HStack maxW='160px' spacing={0}>
          <Button {...inc}>+</Button>
          <Input {...input} textAlign='center'  />
          <Button {...dec}>-</Button>
        </HStack>
      </Flex>
      <Button cursor='pointer' _hover={{ bg: '#4fe3ff' }} as='b' size='lg' bg='#545454' color='white'>Agregar al carrito </Button>
    </Flex>
    </>
  )
}

export default ItemStock