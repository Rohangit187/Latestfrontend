import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';


createRoot(document.getElementById('root')).render(
<Auth0Provider
    domain="dev-uplj18nfwqtiodmk.us.auth0.com"
    clientId="5WClJ9lNo4KgEYulze371Hx1oZoYJtgd"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <StrictMode>
    <App />
  </StrictMode>
  </Auth0Provider>
)
