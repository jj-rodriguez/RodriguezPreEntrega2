import { Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react"
import ItemList from "./ItemList"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import categories from './Productos'
import { Spinner } from '@chakra-ui/react'

const ItemListContainer = () => {
  const { categoryId } = useParams();  
  const [category, setCategory] = useState(null);

  useEffect(() => {
    // Función que simula un llamado asincrónico con una promesa y un retraso de 2 segundos
    const fetchData = async () => {
      try {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 2000); // 2 segundos de retraso
        });
        const foundCategory = categories.find((cat) => cat.id === categoryId);
        setCategory(foundCategory);
        // Una vez que se resuelve la promesa, establecemos los datos en el estado
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  })
    
  if(category === null) {
    return (
    <Container maxW='6xl'>
      <Flex gap='4' alignItems='center'>
        <Heading as='h2' size='xl'>Cargando...</Heading>
        <Spinner size='lg' />
      </Flex>
    </Container>
  )}

  return(
    <Container maxW='1305px' py={{base: 9, lg: '70px'}} px={{base: 6, sm: 12}}>
      <Flex direction='column' alignItems='center' gap='4'>
        <SimpleGrid alignItems='center' justifyContent='center' columns={[2, null, 3]} spacing='40px'>
          <ItemList category={category}/>
        </SimpleGrid>
      </Flex>
    </Container>
  )
}

export default ItemListContainer 