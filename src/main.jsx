import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './Tailwind.jsx'
// import App from './Map1.jsx'
import App from './Routing_h.jsx'
// import App from './Props.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    </BrowserRouter>
  // {/* <Props></Props> */}

)

