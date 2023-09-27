import { Container, Flex, Heading, Image, Text } from '@chakra-ui/react'

export const Hero = () => {
  return (
    <Container maxW='1305px' py={{base: 9, lg: '70px'}} px={{base: 6, sm: 12}}>
    <Flex direction={{base: 'row', md: 'column'}} alignItems='center' gap={6}>      
        <Heading as='h3' size={{base: 'xl', lg: '3xl'}} >D R C - shop</Heading>
        <Heading as='h2' size={{base: 'lg', lg: '2xl'}} textColor='blue.900'>tu boutique de rugby</Heading>     
    </Flex>
  </Container>
  )
}
