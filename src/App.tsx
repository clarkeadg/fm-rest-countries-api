import ThemeContextProvider from './components/ThemeSwitcher/ThemeContext'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Details from './pages/Details'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "details",
        element: <Details />
      },
      {
        path: "*",
        element:  <ErrorPage/>
      }
    ]
  }  
], {
  basename: "/fm-rest-countries-api",
});

const App = () => {
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  )
}

export default App
