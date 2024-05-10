import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { CartModel } from '../utilities/cart.utitlity';

interface CartContextType {
  cartList: CartModel[];
  isOpen: boolean;
  toggleVisiblity: () => void;
  add: (prod: CartModel) => void;
  remove: (id: string) => void;
}

export const CartContext = createContext<CartContextType>({
  cartList: [],
  isOpen: false,
  toggleVisiblity: () => {},
  add: () => {},
  remove: () => {},
});

export const CartContextProvider = (props: PropsWithChildren): JSX.Element => {
  const [cartList, setCartList] = useState<CartModel[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isOpen) {
      timeout = setTimeout(() => {
        setIsOpen(false);
      }, 10000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  });

  const addToCart = (prod: CartModel) => {
    setCartList((prevState) => {
      const index = prevState.findIndex((cart) => cart.id === prod.id);
      let newState: CartModel[] = [...prevState];

      if (index >= 0) {
        newState[index].quantity += prod.quantity;
      } else {
        newState = [...prevState, prod];
      }

      setIsOpen(true);

      return newState;
    });
  };

  const removeFromCart = (id: string) => {
    setCartList((prevState) => {
      const state: CartModel[] = [...prevState];
      const newState: CartModel[] = state.filter((prod) => prod.id !== id);

      setIsOpen(true);

      return newState;
    });
  };

  const toggleVisiblity = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        isOpen,
        toggleVisiblity,
        add: addToCart,
        remove: removeFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
