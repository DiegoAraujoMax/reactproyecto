import React from 'react';
import {ItemListContainer} from "../components";
import { useProducts } from '../Hooks/useProducts';

export const Home = () => {
  
  const { products, loading } = useProducts();

  return <ItemListContainer products={products} />;
  
};
