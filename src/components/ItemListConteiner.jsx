import React, { useState, useEffect } from "react";
import { getProducts } from "../mock/data";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListConteiner = ({ greeting, titleTwo }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const {category}=useParams()



  useEffect(() => {
    setLoading(true);
    getProducts(category)
      .then((res) => {
        if(category){
          setProducts(res.filter((prod)=> prod.category===category))
        }else{setProducts(res)}
      } )
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [category]);

  

  return (
    <div className="titulosPrincipales">
      <h1>{greeting} <strong style={{fontSize:'3rem'}}>{category}</strong></h1>
      <h3>{titleTwo}</h3>

      
      {loading ? (<p>Cargando...</p>) :<ItemList products={products}/>}    
      
      
    </div>
  );
};

export default ItemListConteiner;
