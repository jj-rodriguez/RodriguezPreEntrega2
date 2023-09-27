import { Box, IconButton, Text, useDisclosure } from "@chakra-ui/react"
import React, { useContext } from "react"
import { AiOutlineShopping } from "react-icons/ai"
import { CartContext } from "../../context/ShoppingCartContext"
import Cart from "./Cart"

const CartWidget = () => {
  const { cartCount, cartItems, clearCart } = useContext(CartContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Box pos='relative'>
      <IconButton 
      onClick={onOpen}
      ref={btnRef}
      aria-label='Cart' 
      variant='ghost'
      size='lg' 
      color='#545454' 
      cursor='pointer'
      as={AiOutlineShopping}
      _hover={{ bg: '#4fe3ff', border: 'none', color: 'gray.200' }} 
      _active={{ bg: '#4fe3ff', border: 'none'}}
      />
      <Text borderRadius="full" justify='center' align='center' bg='#4fe3ff' 
      style={{ 
        color: "white",
        width: "2rem",
        height: "2rem",
        position: "absolute",
        top: -40,
        right: 12,
        transform: "translate(100%, 100%)"}}>
        {cartCount}
      </Text>
      <Cart isOpen={isOpen} btnRef={btnRef} onClose={onClose} cartItems={cartItems} clearCart={clearCart}/>
    </Box>
  )                                  
}

export default CartWidget