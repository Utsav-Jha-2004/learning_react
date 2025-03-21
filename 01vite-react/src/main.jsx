import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'http://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }

const anotherElement = (
  <a href="http://google.com" target="_blank">Click me to visit Google</a>
)

const reactElement = React.createElement(
    'a',
    {
        href: 'http://google.com',
        target: '_blank'
    },
    'Click me to visit Google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)