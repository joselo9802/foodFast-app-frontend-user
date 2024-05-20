import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [productsCart, setProductsCart] = useState(
    localStorage.getItem("productsCart")
      ? JSON.parse(localStorage.getItem("productsCart"))
      : []
  );
  const messageCart = localStorage.getItem("messageCart")
    ? JSON.parse(localStorage.getItem("messageCart"))
    : "";
  const messageOrder = localStorage.getItem("messageOrder")
    ? JSON.parse(localStorage.getItem("messageOrder"))
    : "";
  const messageReservation = localStorage.getItem("messageReservation")
    ? JSON.parse(localStorage.getItem("messageReservation"))
    : "";
  const [isConfirmCart, setIsConfirmCart] = useState(false);
  const [isOpenProductDetails, setIsOpenProductDetails] = useState(false);
  const [isOpenReservationEdit, setIsOpenReservationEdit] = useState(false);
  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        productsCart,
        setProductsCart,
        messageCart,
        messageOrder,
        messageReservation,
        isConfirmCart,
        setIsConfirmCart,
        isOpenProductDetails,
        setIsOpenProductDetails,
        isOpenReservationEdit,
        setIsOpenReservationEdit
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
