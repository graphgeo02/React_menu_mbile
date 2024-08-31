import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
// import "./node_modules/bootstrap/dist/css";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { RecoilRoot } from 'recoil';
createRoot(document.getElementById('root')).render(
  
  <RecoilRoot>
  <StrictMode>
    {/*Router step 1 */}
    {/*Recoil step 1 */}
    <BrowserRouter>
      <App />
    </BrowserRouter >
  </StrictMode>
  </RecoilRoot>
)
