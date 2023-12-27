import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import ThemeContextProvider from '../components/ThemeSwitcher/ThemeContext'
import Layout from '../components/Layout/Layout'
import Home from './Home';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Page = () => {
  return (
    <Layout>
      <Home/>
    </Layout>
  )
}

const router = createBrowserRouter([
  {
    path: "*",
    element: <Page/>,
  }
]);

describe('Renders Home Page component correctly', async () => {

  const { container } = render(
    <ThemeContextProvider>
      <RouterProvider router={router} />      
    </ThemeContextProvider>
  );

  const main = container.querySelector('main');
  const title = container.querySelector('h1');
  
  it('Should have a main tag', async () => {  
    expect(main).not.toBeNull();
  });

  it('Should have an h1 tag', async () => {  
    expect(title).not.toBeNull();
  });
});