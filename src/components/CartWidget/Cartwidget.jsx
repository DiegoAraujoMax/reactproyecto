import { useContext } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { HiShoppingCart } from "react-icons/hi2";
import { CartContext } from "../../context";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { cartState } = useContext(CartContext);

  const qtyTotalItems = cartState.reduce((acc, item) => acc + item.qtyItem, 0);

  return (
    <Flex
      alignItems={"center"}
      height={"100%"}
      justifyContent={"space-between"}
      width={"60px"}
    >
      <HiShoppingCart size={25} />
      <Link to="/checkout">
        <Text fontSize={"1.5rem"}>{qtyTotalItems}</Text>
      </Link>    </Flex>
  );
};
