import React, { useState, useMemo } from 'react';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ParentComponent />
    </div>
  );
}

export default App;