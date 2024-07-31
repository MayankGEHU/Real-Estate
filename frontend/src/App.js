import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './component/utils/Routing';
import AuthProvider from './component/context//AuthContext'; 

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routing />
      </AuthProvider>
    </Router>
  );
};

export default App;
