import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';

import Layout from './Layout';
import ThemeContextProvider from '../ThemeSwitcher/ThemeContext';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Page = () => {
  return (
    <Layout>
      <></>
    </Layout>
  )
}

const router = createBrowserRouter([
  {
    path: "*",
    element: <Page/>,
  }
]);

describe('Renders Layout component correctly', async () => {

  const { container } = render(
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );

  it('Should have light class', async () => {  
    fireEvent.click(screen.getByTestId('theme-switcher'));

    const main = container.querySelector('main.light');
    expect(main).not.toBeNull();
  });
  
  it('Should have dark class', async () => {  
    fireEvent.click(screen.getByTestId('theme-switcher'));

    const main = container.querySelector('main.dark');
    expect(main).not.toBeNull();
  });  

});