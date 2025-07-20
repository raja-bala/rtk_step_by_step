 import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import { ApiProvider } from '@reduxjs/toolkit/query/react'
// import jsonPlaceholderApi from './services/JsonPlaceholderAPI.ts'
import { Provider } from 'react-redux'
import store from './store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/** To use only a particular API from redux */}
    {/* <ApiProvider api={jsonPlaceholderApi}>
      <App />
    </ApiProvider> */}
  }<Provider store={store}> 
    <App />
  </Provider>
    
  </StrictMode>,
)
