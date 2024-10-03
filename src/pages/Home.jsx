import React from 'react';
import { ItemListContainer } from '../components';
import { useItemsCollection } from '../Hooks/useItemsCollection';
import { Flex, Spinner, Box } from '@chakra-ui/react'

export const Home = () => {
  const { items, loading, error } = useItemsCollection('products');

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
    <ItemListContainer products={items} />
  );
};
