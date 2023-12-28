import ThemeContextProvider from './components/ThemeSwitcher/ThemeContext'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
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
        path: "country/:name",
        element: <Details />
      }
    ]
  }  
], {
  basename: "/fm-rest-countries-api/",
});

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeContextProvider>
  )
}

export default App
