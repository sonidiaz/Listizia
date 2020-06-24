import React from 'react';
import Trablero from './Tablero';


import store from '../state/store'
import {Provider} from 'react-redux'


const Appy = () => {
  return(
    <Provider store={store}>
      <Trablero/>
    </Provider>
  )
}

export {Appy};
