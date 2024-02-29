import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Co2 from './components/co2/Co2.jsx'
import ErrorPage from './ErrorPage.jsx'
import Methane from './components/methane/Methane.jsx'
import Nitrous from './components/nitrous/Nitrous.jsx'
import Temperature from './components/temperature/Temperature.jsx'
import Artcic from './components/arctic/Arctic.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "co2",
    element: <Co2 />
  },
  {
    path: "methane",
    element: <Methane />
  },
  {
    path: "nitrous",
    element: <Nitrous />
  },
  {
    path: "temperature",
    element: <Temperature />
  },
  {
    path: "arctic",
    element: <Artcic />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>


  </React.StrictMode>,
)
