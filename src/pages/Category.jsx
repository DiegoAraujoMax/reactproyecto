import React from "react";
import { useParams } from "react-router";
import { ItemListContainer } from "../components";
import { useProductsByCategory } from "../Hooks";
import { Spinner } from "@chakra-ui/react";

export const Category = () => {
  const { categoryId } = useParams();

  const { products, loading } = useProductsByCategory(categoryId);

  return loading ? <Spinner /> : <ItemListContainer products={products} />;
};
