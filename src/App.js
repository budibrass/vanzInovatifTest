import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutersCustom from './routes';
import { Provider } from 'react-redux';
import Store from './store/store';

const App = () => {
  return (
    <>
    <Provider store={Store}>
      <Router>
        <div className='d-flex justify-content-center' style={{ minHeight: '100vh'}}>
          <RoutersCustom />
        </div>
      </Router>
    </Provider>
    </>
  )
}

export default App;