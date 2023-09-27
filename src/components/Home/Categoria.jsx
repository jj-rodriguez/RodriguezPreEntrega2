import { Container, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import pelotas from '../../assets/pelota.png'
import camisetas from '../../assets/camiseta.png'
import pantalones from '../../assets/pantalon.png'
import botines from '../../assets/botin.png'


export const Categoria = () => {
  return (
    <Container maxW='1305px' py={{base: 9, lg: '70px'}} px={{base: 6, sm: 12}}>
      <Heading width='100%' textAlign='center' size='xl' color='gray.700' pb='12'>Categorías</Heading>
        <SimpleGrid rowGap='12' templateColumns={{base: 'repeat(2, auto)' , md: 'repeat(4, auto)'}} justifyContent={{base: 'space-around', lg: 'space-between'}}>
            <Stack maxW='200px' align='center'>
              <Image boxSize={{base: '100px', lg: '100px'}}  src={pelotas} />
              <Text fontSize={{base: 'lg' ,lg: '2xl'}}>Pelotas</Text>
            </Stack>
            <Stack maxW='200px' align='center'>
              <Image boxSize={{base: '100px', lg: '100px'}} src={camisetas} />
              <Text fontSize={{base: 'lg' ,lg: '2xl'}}>Camisetas</Text>
            </Stack>
            <Stack maxW='200px' align='center'>
              <Image boxSize={{base: '100px', lg: '100px'}} src={pantalones} />
              <Text fontSize={{base: 'lg' ,lg: '2xl'}}>Pantalones</Text>
            </Stack>
            <Stack maxW='200px' align='center'>
              <Image boxSize={{base: '100px', lg: '100px'}}  src={botines} />
              <Text fontSize={{base: 'lg' ,lg: '2xl'}}>Botines</Text>
            </Stack>
            
        </SimpleGrid>
    </Container>
  )
}
