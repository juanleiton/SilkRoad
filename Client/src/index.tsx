import { createRoot } from 'react-dom/client'
import App from './App'

const domNode = document.getElementById('root')
const root = domNode !== null ? createRoot(domNode) : null
if (root !== null) root.render(<App />)
