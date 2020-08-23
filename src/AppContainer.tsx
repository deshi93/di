import React from 'react';

import App from './App'
import Dependencies from './Dependencies'

function AppContainer() {
  return (
    <Dependencies>
      <App />
    </Dependencies>
  );
}

export default AppContainer;
