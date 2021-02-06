import React from "react";
import {order} from "../reducers";
import { useSelector, useDispatch } from "react-redux";

function TransactionRow(props) {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  return ( 
    <tr>
      <td>{() => dispatch(order.id())}</td>
      <td>{() => dispatch(order.orderDate())}</td>
      <td>{() => dispatch(order.orderTime())}</td>
      <td>{() => dispatch(order.amount())}</td>
    </tr>
  );
}

export default TransactionRow;
