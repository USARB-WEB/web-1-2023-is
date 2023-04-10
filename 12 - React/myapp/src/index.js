import React from 'react';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import IndexPage from './pages/IndexPage';
import ContactsPage from './pages/ContactsPage';
import ProductsListPage from './pages/products/List';
import ProductsCreatePage from './pages/products/Create';


const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage/>,
  },
  {
    path: "/contacts",
    element: <ContactsPage/>,
  },
  {
    path: '/products',
    element: <ProductsListPage/>
  },
  {
    path: '/products/create',
    element: <ProductsCreatePage/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
