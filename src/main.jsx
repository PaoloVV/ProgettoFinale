import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Co2 from './components/co2/Co2.jsx'
import ErrorPage from './ErrorPage.jsx'
import Methane from './components/methane/Methane.jsx'
import Nitrous from './components/nitrous/Nitrous.jsx'
import Temperature from './components/temperature/Temperature.jsx'
import Arctic from './components/arctic/Arctic.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "co2",
//     element: <Co2 />
//   },
//   {
//     path: "methane",
//     element: <Methane />
//   },
//   {
//     path: "nitrous",
//     element: <Nitrous />
//   },
//   {
//     path: "temperature",
//     element: <Temperature />
//   },
//   {
//     path: "arctic",
//     element: <Artcic />
//   }
// ])

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}></Route>
      <Route path='co2' element={<Co2 />}></Route>
      <Route path='methane' element={<Methane />}></Route>
      <Route path='nitrous' element={<Nitrous />}></Route>
      <Route path='temperature' element={<Temperature />}></Route>
      <Route path='arctic' element={<Arctic />}></Route>
      <Route path='*' element={<ErrorPage />}></Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>


  </React.StrictMode>,
)
