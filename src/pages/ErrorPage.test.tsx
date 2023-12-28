import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import ThemeContextProvider from '../components/ThemeSwitcher/ThemeContext'
import Layout from '../components/Layout/Layout'
import ErrorPage from './ErrorPage';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Page = () => {
  return (
    <Layout>
      <ErrorPage/>
    </Layout>
  )
}

const router = createBrowserRouter([
  {
    path: "*",
    element: <Page/>,
  }
]);

describe('Renders Error Page component correctly', async () => {

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

  it('Should have an title tag', async () => {  
    const element = screen.getByText('404');
    expect(element).not.toBeNull();
  });

  it('Should have an p tag', async () => {  
    const element = screen.getByText('Page not found');
    expect(element).not.toBeNull();
  });
});