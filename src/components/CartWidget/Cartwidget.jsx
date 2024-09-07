import { Flex, Text } from "@chakra-ui/react";
import { HiShoppingCart } from "react-icons/hi2";

const CardWidget = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <HiShoppingCart size= {25} />
      <Text>1</Text>
    </Flex>
  );
};

export default CardWidget;
