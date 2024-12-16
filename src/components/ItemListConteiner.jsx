import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import SpinnerLoader from "./SpinnerLoader";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebase";

const ItemListConteiner = ({ greeting, titleTwo, loader }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    const productsCollection = category
      ? query(collection(db, "productos"), where("category", "==", category))
      : collection(db, "productos");
    getDocs(productsCollection)
      .then((resp) => {
        const list = resp.docs.map((product) => {
          return {
            id: product.id,
            ...product.data(),
          };
        });
        setProducts(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div className="titulosPrincipales">
      <h1>
        {greeting} <strong style={{ fontSize: "3rem" }}>{category}</strong>
      </h1>
      <h3>{titleTwo}</h3>

      {loading ? <SpinnerLoader/> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListConteiner;
