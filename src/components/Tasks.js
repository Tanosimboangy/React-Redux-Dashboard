import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {newTasks} from "../reducers";


function Tasks(props) {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()
  return ( <div className="col-lg-3 col-md-6">
                        <div className="panel panel-green">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-3">
                                        <i className="fa fa-tasks fa-5x"></i>
                                    </div>
                                    <div className="col-xs-9 text-right">
                                        <div className="huge">{() => dispatch(newTasks())}</div>
                                        <div>New Tasks!</div>
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

export default Tasks;

