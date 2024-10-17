import React, { useState, useMemo } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const memoizedChild = useMemo(() => <ChildComponent />, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Parent Component</h1>
      <p className="mb-4">Count: {count}</p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={incrementCount}
      >
        Increment Count
      </button>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Child Component (Memoized):</h2>
        {memoizedChild}
      </div>
    </div>
  );
};

export default ParentComponent;