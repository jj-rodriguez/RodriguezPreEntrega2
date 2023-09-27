import { Box, Container, FormControl, FormLabel, Grid, GridItem, HStack, Icon, Input, Stack, Text, Textarea, VStack } from '@chakra-ui/react'
import { MdLocalPhone, MdLocationPin, MdOutlineEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <Box bgColor='#545454'>
      <Container maxW='1305px' py={{base: 9, lg: '70px'}} px={{base: 6, sm: 12}}>
        <Grid templateColumns={{base: '1fr', md: 'repeat(3, 1fr)'}} rowGap={10} columnGap={6}>
          <GridItem colSpan={{base: 1, md: 2}}>
            <VStack align={'flex-start'} bgColor='white' px={6} py={6} spacing={6} borderRadius={8} border='2px' borderColor='#545454'>
                <Text textAlign='center' fontSize='2xl' fontWeight={700}>Formulario de Contacto</Text>
                <Text textAlign='center' fontSize='lg' color='gray.400'>Envíanos tu consulta.</Text>
              <VStack w={{base: '100%', lg: '70%'}} align='center'>
                <FormControl isRequired>
                  <FormLabel>Nombre</FormLabel>
                  <Input border='2px' borderColor={'#545454'} size='lg' type="text" name="name" placeholder="Ingrese su nombre..." />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Apellido</FormLabel>
                  <Input border='2px' borderColor={'#545454'} size='lg' type="text" name="lastname" placeholder="Ingrese su apellido..." />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input border='2px' borderColor={'#545454'} size='lg' type="text" name="email" placeholder="Ingrese su email..." />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Mensaje</FormLabel>
                  <Textarea
                    border='2px' borderColor={'#545454'}
                    name="message"
                    placeholder="Escriba su mensaje..."
                    rows={6}
                    resize="none"
                  />
                </FormControl>
              </VStack>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack bgColor='white' px={6} py={6} spacing={6} borderRadius={8} border='2px' borderColor='#4fe3ff'>
              <Text textAlign='center' fontSize='2xl' fontWeight={700}>Información de contacto</Text>
              <Stack spacing={6}>
                <HStack>
                  <Icon boxSize={6} as={MdOutlineEmail} color='#4fe3ff' />
                  <Text color='#545454'>drcshop@gmail.com</Text>
                </HStack>
                <HStack>
                  <Icon boxSize={6} as={MdLocalPhone} color='#4fe3ff' />
                  <Text color='#545454'>+59 2227 511395</Text>
                </HStack>
                <HStack>
                  <Icon boxSize={6} as={MdLocationPin} color='#4fe3ff' />
                  <Text color='#545454'>calle 26 N°1088, Navarro, Bueno Aires</Text>
                </HStack>
              </Stack>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default Contact