import { Box } from '@chakra-ui/react'
import { Hero } from './Hero'
import { Categoria } from './Categoria'



export const Home = () => {
  return (
    <Box bgColor='white'>
      <Hero />
      <Categoria/>          
    </Box>
  )
}
