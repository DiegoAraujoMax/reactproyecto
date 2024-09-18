import React from 'react';
import { ItemListContainer } from '../components';
import { useProducts } from '../Hooks/useProducts';
import { Flex, Spinner, Box } from '@chakra-ui/react'

export const Home = () => {
  const { products, loading, error } = useProducts();

  return loading ? (
    <Flex justifyContent={"center"} alignItems={"center"} h={"80vh"}>
      <Spinner />
    </Flex>
  ) : error ? (
    <Box>
      Encontramos un error al cargar los productos, contactese con
      soporte, gracias.
    </Box>
  ) : (
    <ItemListContainer products={products} />
  );
};
