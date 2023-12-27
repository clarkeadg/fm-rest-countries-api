import ThemeContextProvider from './components/ThemeSwitcher/ThemeContext'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home'
import Details from './pages/Details'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/details",
    element:  <Details/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "*",
    element:  <ErrorPage/>,
    errorElement: <ErrorPage />
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
