import { Menu, MenuButton, MenuList, MenuItem, Button, Text, MenuGroup} from "@chakra-ui/react"
import { BiChevronDown } from "react-icons/bi";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
const NavProducts = () => {
  return(
    <Menu>
        <MenuButton
          variant='ghost' 
          as={Button} 
          rightIcon={<BiChevronDown color="white" />}
          _hover={{ bg: '#545454', border: 'none' }} 
          _active={{ bg: '#545454', border: 'none'}}
        >
          <Text fontSize='lg' color='#4fe3ff'>Productos</Text>
        </MenuButton>
        <MenuList display='flex' flexWrap='wrap' gap='6'>
          <MenuGroup >
          <ChakraLink as={ReactRouterLink} reloadDocument to='/category/pelotas'>
            <MenuItem>Pelotas</MenuItem>
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} reloadDocument to='/category/camisetas'>
            <MenuItem>Camisetas</MenuItem>
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} reloadDocument to='/category/botines'>
            <MenuItem>Botines</MenuItem>
          </ChakraLink>           
          <ChakraLink as={ReactRouterLink} reloadDocument to='/category/pantalones'>
            <MenuItem>Pantalones</MenuItem>
          </ChakraLink>                         
          </MenuGroup>
        
        </MenuList>
      </Menu>
  )
}

export default NavProducts