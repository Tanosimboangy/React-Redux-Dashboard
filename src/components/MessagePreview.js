import React from "react";
import DateTime from "./DateTime";
import { useSelector, useDispatch } from "react-redux";
import {message} from "../reducers";

function MessagePreview(props) {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  return (    
    <li className="message-preview">
      <a href="#">
        <div className="media">
          <span className="pull-left">
            <img className="media-object" src="http://placehold.it/50x50" alt="" />
          </span>
          <div className="media-body">
            <h5 className="media-heading"><strong>{() => dispatch(message.name())}</strong>
            </h5>
            <DateTime date={() => dispatch(message.date())} />
            <p>{() => dispatch(message.message())}</p>
          </div>
        </div>
      </a>
    </li>
  );
}

export default MessagePreview;
