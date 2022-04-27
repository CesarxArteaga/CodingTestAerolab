import React from 'react';
import './App.css';
import MainPage from './modules/main-page';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <MainPage />
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        toastOptions={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none'
          }
        }}
      />
    </div>
  );
}

export default App;
