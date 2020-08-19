import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store';



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <h2>tes</h2>
      </BrowserRouter>
    </Provider>

  )
}

export default App;
