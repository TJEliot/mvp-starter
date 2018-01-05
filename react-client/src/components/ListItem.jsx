import React from 'react';

const ListItem = (props) => (
  <div className="scoreList">
    {props.item.username}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {props.item.balance} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {props.item.sent}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.item.received}&nbsp;&nbsp;
  </div>
)

export default ListItem;