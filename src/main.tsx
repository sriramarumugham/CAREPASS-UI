import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";



import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { GoogleOAuthProvider } from '@react-oauth/google';

const queryClient = new QueryClient();



createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId="395430358937-6f0jkk3c7n30n7mpfka333mepqmu4k2o.apps.googleusercontent.com">
    <StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </StrictMode>
  </GoogleOAuthProvider>


)
