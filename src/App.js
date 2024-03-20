// App.js
import React from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <ThemeProvider>
      <MainComponent />
    </ThemeProvider>
  );
}

export default App;
