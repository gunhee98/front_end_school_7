import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sale, soldOut } from "../modules/stockCounter";
export default function StockCounter() {
  const { message } = useSelector((state) => {
    return {
      message: state.stockReducer.message,
    };
  });
  const { stock } = useSelector((state) => {
    return {
      stock: state.goodsReducer.stock,
    };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (stock <= 0) {
      dispatch(soldOut());
    } else {
      dispatch(sale());
    }
  }, [stock]);
  return <p>{message}</p>;
}
