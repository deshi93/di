import React from 'react';

import { useDependencies } from './Dependencies'

function App() {
  const { useHello } = useDependencies()
  const message = useHello()

  return (
    <div>app here, { message }</div>
  );
}

export default App;
