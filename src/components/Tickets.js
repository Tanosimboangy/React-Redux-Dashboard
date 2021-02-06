import React from "react";
import { connect } from "react-redux";
import state from "../state";

function Tickets({tickets}) {
  return(
    <div className="col-lg-3 col-md-6">
      <div className="panel panel-red">
        <div className="panel-heading">
          <div className="row">
            <div className="col-xs-3">
              <i className="fa fa-support fa-5x"></i>
            </div>
            <div className="col-xs-9 text-right">
              <div className="huge">{tickets}</div>
              <div>Support Tickets!</div>
            </div>
          </div>
        </div>
        <a href="#">
          <div className="panel-footer">
            <span className="pull-left">View Details</span>
            <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
            <div className="clearfix"></div>
          </div>
        </a>
      </div>
    </div>);
}

function mapStateToProps() {
  return {
    tickets: state.tickets
  }
}
const mapDispatchToProps = {
  tickets: state.tickets
 }

export default connect(mapStateToProps, mapDispatchToProps) (Tickets)