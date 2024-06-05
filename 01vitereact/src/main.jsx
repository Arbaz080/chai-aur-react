import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const customReact = React.createElement(
    'a',
    {href: "https://google.com", target: '_blank'},
    'Click to visit Google'
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
   <App />

)
