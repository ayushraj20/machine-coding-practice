import { useState } from 'react';
import '../styles/Explorer.css';
import { useExplorer } from '../context/explorerContext';

const Explorer = ({ data, depth = 0 }) => {
  const { setFileData } = useExplorer();
  const [expanded, setIsExpanded] = useState(false);

  const deleteNodeById = (node, id) => {
    // If the node itself is the one to delete, return null to remove it
    if (node.id === id) return null;

    // If the node has children (it's a folder), process them recursively
    if (node.isFolder) {
      node.items = node.items
        .map((child) => deleteNodeById(child, id)) // Recur on each child
        .filter((child) => child !== null); // Remove any null nodes
    }

    return node;
  };

  const handleDelete = (id) => {
    setFileData((prevData) => {
      // Make a deep copy to avoid direct mutation
      const newData = JSON.parse(JSON.stringify(prevData));
      return deleteNodeById(newData, id);
    });
  };
  return (
    <>
      <div
        style={{ paddingLeft: `${depth * 20}px` }}
        className="explorer-container"
      >
        {data.isFolder && (
          <span
            className="expand-icon"
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            {expanded ? '⬇️' : '➡️'}
          </span>
        )}
        {data.name}
        <button onClick={() => handleDelete(data.id)} disabled={data.id === 1}>
          🗑️
        </button>
      </div>

      <div style={{ display: expanded ? 'block' : 'none' }}>
        {data.isFolder && (
          <div>
            {data.items.map((elem, idx) => (
              <Explorer key={idx} data={elem} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Explorer;
