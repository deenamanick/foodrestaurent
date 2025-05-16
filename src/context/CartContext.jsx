import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existing = state.find(item => item.id === action.payload.id);
      if (existing) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload);

    case 'INCREMENT':
      return state.map(item =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );

    case 'DECREMENT':
      return state.map(item =>
        item.id === action.payload
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      );

    case 'CLEAR_CART':
      return [];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (item) => dispatch({ type: 'ADD_ITEM', payload: item });
  const removeFromCart = (id) => dispatch({ type: 'REMOVE_ITEM', payload: id });
  const incrementQty = (id) => dispatch({ type: 'INCREMENT', payload: id });
  const decrementQty = (id) => dispatch({ type: 'DECREMENT', payload: id });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, incrementQty, decrementQty, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
