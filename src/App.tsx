import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppSelector } from './components/state/hooks';
import Search from './components/layer/Layer';

function App() {

  const layers = useAppSelector((state) => state.layers.layers)
  console.log(layers)

  return (
    <div className="App">
      <Search />
      {layers &&
        <div>
          {JSON.stringify(layers)}
        </div>}
    </div>
  );
}

export default App;
