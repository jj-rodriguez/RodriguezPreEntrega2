import { Container, Flex, Image } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import logo from '../../assets/logo.png'
import CartWidget from './CartWidget'
import NavLinks from './NavLinks'
import SearchBar from './SearchBar'

const NavBar = () => {
  return (
    <>
      <Flex flexDirection='column' as='nav' pt='6' align='center' maxWidth='100%' justify='space-between'>
        <Container maxW='8xl'>
          <Flex justify='space-between' align='center'>
            <ChakraLink alignContent='end' as={ReactRouterLink} to='/'>
              <Image  px='24px' py='4' width='250px' objectFit='contain' src={logo}></Image>
            </ChakraLink>           
              <Flex justifyContent='end' paddingRight='10'><CartWidget /></Flex>        
          </Flex>
        </Container>
        <NavLinks />
      
      </Flex>

    </>
  )


}

export default NavBar