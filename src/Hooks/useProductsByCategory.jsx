import React from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

export const useProductsByCategory = (id) => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const customeQuery = query(
      collection(db, "products"),
      where("category", "==", id)
    );
    getDocs(customeQuery)
      .then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  return { products, loading };
};
