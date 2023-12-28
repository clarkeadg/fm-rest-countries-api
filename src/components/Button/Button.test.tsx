import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import Button from './Button';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Page = () => {
  return (
    <>
      <Button>
        Hello
      </Button>

      <Button href="/">
        Hello2
      </Button>
    </>
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
  
  it('Should have button element', async () => {  
    const button = container.querySelector('button.button');
    expect(button).not.toBeNull();
  });

  it('Should have an anchor element', async () => {  
    const button = container.querySelector('a.button[href="/"]');
    expect(button).not.toBeNull();
  });

});
