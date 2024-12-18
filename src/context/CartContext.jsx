import { createContext, useContext, useEffect, useState } from "react";
export const CartContext = createContext();

const fromlocalStorage =
  JSON.parse(localStorage.getItem("carritoPersistente")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(fromlocalStorage);

  useEffect(() => {
    localStorage.setItem("carritoPersistente", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((prod) => {
          if (prod.id === item.id) {
            return { ...prod, cantidad: prod.cantidad + quantity };
          } else {
            return prod;
          }
        })
      );
    } else {
      setCart([...cart, { ...item, cantidad: quantity }]);
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const borrarCarrito = () => {
    setCart([]);
  };
  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const cartQuantity = () => {
    return cart.reduce((acc, prod) => (acc += prod.cantidad), 0);
  };
  const totalCarrito = () => {
    return cart.reduce((acc, prod) => (acc += prod.precio * prod.cantidad), 0);
  };

  const stockEnCarrito = (id) => {
    const itemEnCarrito = cart.find((prod) => prod.id === id);
    if (itemEnCarrito) {
      return itemEnCarrito.cantidad;
    } else {
      return 0;
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isInCart,
        borrarCarrito,
        removeItem,
        cartQuantity,
        totalCarrito,
        stockEnCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
