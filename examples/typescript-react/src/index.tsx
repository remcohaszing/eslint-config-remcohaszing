import 'bulma/css/bulma.css'

import { createRoot } from 'react-dom/client'

import { App } from './components/App/index.js'

const root = createRoot(document.getElementById('app')!)
root.render(<App />)
