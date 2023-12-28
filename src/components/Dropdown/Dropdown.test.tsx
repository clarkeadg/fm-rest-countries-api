import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';

import Dropdown from './Dropdown';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Page = () => {
  return (
    <Dropdown title="Filter by Region">
      <div>Menu Item 1</div>
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
  
  it('Should not have a menu element', async () => {  
    const element = container.querySelector('.dropdown-menu');
    expect(element).toBeNull();
  }); 
  
  it('Should have a menu element', async () => {  
    fireEvent.click(screen.getByTestId('dropdown-trigger'));

    const element = container.querySelector('.dropdown-menu');
    expect(element).not.toBeNull();
  });

  it('Should have child element', async () => { 
    const element = screen.getByText('Menu Item 1');
    expect(element).not.toBeNull();
  });

  it('Should not have a menu element', async () => {  
    fireEvent.click(screen.getByTestId('dropdown-trigger'));

    const element = container.querySelector('.dropdown-menu');
    expect(element).toBeNull();
  });
});
