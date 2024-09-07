import { Flex} from "@chakra-ui/react";


const ItemListContainer = ({greeting}) => {
return <Flex alignItems={"center"} justifyContent={"center"} fontSize="2em" fontFamily= "initial" mt="2em" >{greeting}</Flex>
};

export default ItemListContainer;