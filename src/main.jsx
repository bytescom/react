// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
  ,
)

/**
 * @using react to render
 * We using .jsx where we write html - that is EXML
 * 
 * createRoot(document.getElementbyId('root')).render(<>Hey, I am using react.</>
 )
 */


/**
 * @using javascript to render

const divTag = document.getElementById("root");
const h1Tag = document.createElement("h1")
h1Tag.textContent = "Yehhh, I am using react"
divTag.append(h1Tag)

*/

