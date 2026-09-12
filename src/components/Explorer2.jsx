import React, { useState } from 'react';

const Explorer2 = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandOnClickHandler = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div>
      <div>
        {data.isFolder && (
          <span onClick={expandOnClickHandler} style={{ cursor: 'pointer' }}>
            {isExpanded ? ' - ' : ' + '}
          </span>
        )}
        {data.name}
      </div>
      {data.isFolder && isExpanded && (
        <div style={{ marginLeft: 20 }}>
          {data.items.map((item, idx) => {
            return <Explorer2 key={idx} data={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Explorer2;
