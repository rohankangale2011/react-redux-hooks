import React from 'react';

export default ({data}) => {
  return (
    <div className="list-container">
      {data.map(item => (
      <div key={item.id}>{item.value}</div>
      ))}
    </div>
  );
}