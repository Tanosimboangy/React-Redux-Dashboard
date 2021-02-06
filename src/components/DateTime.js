import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {date} from "../reducers";

function DateTime(props) {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  return (   
    <p className="small text-muted"><i className="fa fa-clock-o"></i>{() => dispatch(date())}</p>
  );
}

export default DateTime;
