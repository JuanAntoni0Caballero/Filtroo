import React from 'react';
import Main from './src/components/Main.jsx';
import { NativeRouter } from 'react-router-native';

const App = () => {
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
  );
}

export default App

