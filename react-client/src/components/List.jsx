import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h2>Scoreboard</h2>
    <h4 className="scoreList">Username Balance Sent Received</h4>
    { props.items.map(item => <ListItem item={item} />)}
  </div>
)

export default List;