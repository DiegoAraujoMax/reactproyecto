import React from 'react';
import { useParams } from 'react-router';
import { ItemListContainer } from '../components';
import { useProductsByCategory } from '../Hooks';


export const Category = () => {
    const { Categoryid } = useParams();

    const {products} = useProductsByCategory(Categoryid)

    
  return <ItemListContainer products={[products]} />;
};
