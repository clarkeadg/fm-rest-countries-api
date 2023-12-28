import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';

import Dropdown from './Dropdown';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Page = () => {
  return (
    <Dropdown>
      Filter by Region
    </Dropdown>
  )
}

const router = createBrowserRouter([
  {
    path: "*",
    element: <Page/>,
  }
]);

describe('Renders Dropdown component correctly', async () => {

  const { container } = render(
    <RouterProvider router={router} />
  );
  
  it('Should have title element', async () => {  
    const element = screen.getByText('Filter by Region');
    expect(element).not.toBeNull();
  });  
});
