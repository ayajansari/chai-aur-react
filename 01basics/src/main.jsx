import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'

//if we want to work with react in browsers then react-dom is used and for mobile there is react-native
ReactDOM.createRoot(document.getElementById('root')).render(
  // react renders only single tag 
    <Chai />
  
)

