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
  
  it('Should have a main tag', async () => { 
    const element = container.querySelector('main'); 
    expect(element).not.toBeNull();
  });

  it('Should have an h1 tag', async () => {  
    const element = container.querySelector('h1');
    expect(element).not.toBeNull();
  });

  it('Should have a search-form', async () => {  
    const element = container.querySelector('.search-form');
    expect(element).not.toBeNull();
  });

  it('Should have a dropdown', async () => {  
    const element = container.querySelector('.dropdown');
    expect(element).not.toBeNull();
  });

});