import React from "react";
import DateTime from "./DateTime";
import { connect } from "react-redux";
import state from "../state";

function MessagePreview({messages}) {
  return (    
    <li className="message-preview">
      <a href="#">
        <div className="media">
          <span className="pull-left">
            <img className="media-object" src="http://placehold.it/50x50" alt="" />
          </span>
          <div className="media-body">
            <h5 className="media-heading"><strong>{messages.name}</strong>
            </h5>
            <DateTime date={messages.date} />
            <p>{messages.message}</p>
          </div>
        </div>
      </a>
    </li>
  );
}

function mapStateToProps() {
  return {
    messages: state.messages
  }
}
const mapDispatchToProps={
  messages: state.messages
}
export default connect(mapStateToProps, mapDispatchToProps) (MessagePreview);
