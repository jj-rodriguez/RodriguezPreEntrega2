import { Link, List, ListItem, Text } from "@chakra-ui/react"
import NavProducts from "./NavProducts"
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import SearchBar from './SearchBar'

const NavLinks = () => {
  return(
    <>
      <List bg='#545454' display ='flex' px='12px' py='10px' width='100%' alignItems='center' justifyContent='space-around' gap='40px'>
        <ListItem>
        <ChakraLink as={ReactRouterLink} reloadDocument to='/'>
              <Text fontSize='lg' fontWeight='semibold' as='p' color='#4fe3ff'>Inicio </Text>
            </ChakraLink> 
        </ListItem>
        <ListItem>
          <NavProducts/>
        </ListItem>
        <ListItem>
            <Link>
              <Text fontSize='lg' fontWeight='semibold' as='p' color='#4fe3ff'>Categorias</Text>
            </Link> 
        </ListItem>
        <ListItem>
          <ChakraLink as={ReactRouterLink} reloadDocument to='/contact'>
              <Text fontSize='lg' fontWeight='semibold' as='p' color='#4fe3ff'>Contacto </Text>
            </ChakraLink> 
        </ListItem>
        <SearchBar />
      </List>
      
    </>
  )
}

export default NavLinks