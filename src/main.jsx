import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import BookPage from './routes/bookpage/BookPage.jsx';

// const router = createBrowserRouter([{
//   path: '/', 
//   element: <div>Hello World</div>,
//   errorElement: <ErrorPage />,
// },
// {
//   path: 'book:bookpageId',
//   element: <BookPage/>
// }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>,
)
