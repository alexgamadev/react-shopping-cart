import React  from 'react'
import { Notyf } from 'notyf';

export default React.createContext(
  new Notyf({
    duration: 2000,
    types: [
      {
        type: 'success',
        dismissible: true,
      }
    ]
  })
);