import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {task} from "../reducers";

function TaskItem(props) {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  return (<a href="#" className="list-group-item">
              <span className="badge">{() => dispatch(task.date())}</span>
              <i className="fa fa-fw fa-calendar"></i> {() => dispatch(task.task())}
          </a> );
}

export default TaskItem;

