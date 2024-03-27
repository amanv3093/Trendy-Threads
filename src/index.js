import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ItemContextProvider } from './Context/Context';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Men from './Component/Men/Men';
import Home from './Component/Home/Home';
import Details from './Component/Details/Details';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {path:'/',element:<App />,children:[
  { path: '/', element: <Home /> },
  { path: '/men', element:<Men />},
  { path: '/details', element:<Details/>},
  ]}
 
]);

root.render(
  <React.StrictMode>
  <ItemContextProvider>
  <RouterProvider router={router} />
    
  </ItemContextProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();