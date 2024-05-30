import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeItem from './components/HomeItem.jsx'
import Bag from './routes/Bag.jsx'
import Home from './routes/Home.jsx'
import { Provider } from "react-redux"
import shopStore from './store/index.js'
import Product from './routes/Product.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home></Home> },
      { path: '/bag', element: <Bag></Bag> },
      { path: '/product/:id', element: <Product></Product> }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={shopStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
