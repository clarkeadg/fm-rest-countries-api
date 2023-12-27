import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';

import Link from './Link';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Page = () => {
  return (
    <Link href="/" className="link">
      Hello
    </Link>
  )
}

const router = createBrowserRouter([
  {
    path: "*",
    element: <Page/>,
  }
]);

describe('Renders Button component correctly', async () => {

  const { container } = render(
    <RouterProvider router={router} />
  );
  
  it('Should have children content', async () => {  
    const link = screen.getByText('Hello')
    expect(link).not.toBeNull();
  });

  it('Should have anchor element with correct href and class', async () => {  
    const link = container.querySelector('a.link[href="/"]');
    expect(link).not.toBeNull();
  });

});