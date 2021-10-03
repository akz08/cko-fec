import React from 'react';

export default function TrendGraph(): JSX.Element {
  return (
    <div
      className="trend-graph-container"
      style={{
        backgroundColor: 'rgb(57, 63, 121)',
        flexGrow: 1,
        minWidth: '350px',
      }}
    >
      <h2>Product Trends</h2>
      {/* add graph here */}
    </div>
  );
}
