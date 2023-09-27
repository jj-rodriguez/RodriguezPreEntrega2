import { Button, Input, InputGroup, InputLeftElement, InputRightAddon } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";


const SearchBar = () => {
  return (
    <>
      <InputGroup justifySelf='center' width={{lg: '300px', md: '200px'}} borderRadius={5} size="md">
        <InputLeftElement pointerEvents="none">
          <AiOutlineSearch color="gray.600" />
        </InputLeftElement>
        <Input type="text" placeholder="Buscar..." border='1px solid #4fe3ff'  />
        <InputRightAddon
          p={0}
          border="none"
        >
          <Button bg='#545454' color='white' style={{bg: '#545454' }}          
          _hover={{ bg: '#4fe3ff' , border: 'none' }} 
          _active={{ bg: '#4fe3ff', border: 'none'}} 
          size="md" 
          borderLeftRadius={0} 
          borderRightRadius={3.3} 
          border='1px solid #4fe3ff'>
            Buscar
          </Button>
        </InputRightAddon>
      </InputGroup>
    </>
  );
};

export default SearchBar