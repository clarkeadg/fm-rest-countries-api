import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';

import CountryDetails from './CountryDetails';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const borderCountries = ['France','Germany','Netherlands'];

const Page = () => {
  return (
    <CountryDetails
      flag={"https://flagcdn.com/de.svg"}
      title={"Belgium"}
      nativeName={"Belgie"}
      population={"11,319,511"}
      region={"Europe"}
      subregion={"Western Europe"}
      capital={"Brussels"}
      topLevelDomain={".be"}
      currencies={"Euro"}
      languages={"Dutch, French, German"}
      borderCountries={borderCountries}
    />
  )
}

const router = createBrowserRouter([
  {
    path: "*",
    element: <Page/>,
  }
]);

describe('Renders CountryDetails component correctly', async () => {

  const { container } = render(
    <RouterProvider router={router} />
  );
  
  it('Should have title element', async () => {  
    const element = screen.getByText('Belgium');
    expect(element).not.toBeNull();
  });

  it('Should have nativeName element', async () => {  
    const element = screen.getByText('Belgie');
    expect(element).not.toBeNull();
  });

  it('Should have population element', async () => {  
    const element = screen.getByText('11,319,511');
    expect(element).not.toBeNull();
  });

  it('Should have region element', async () => {  
    const element = screen.getByText('Europe');
    expect(element).not.toBeNull();
  });

  it('Should have subregion element', async () => {  
    const element = screen.getByText('Western Europe');
    expect(element).not.toBeNull();
  });

  it('Should have capital element', async () => {  
    const element = screen.getByText('Brussels');
    expect(element).not.toBeNull();
  });

  it('Should have topLevelDomain element', async () => {  
    const element = screen.getByText('.be');
    expect(element).not.toBeNull();
  });

  it('Should have currencies element', async () => {  
    const element = screen.getByText('Euro');
    expect(element).not.toBeNull();
  });

  it('Should have languages element', async () => {  
    const element = screen.getByText('Dutch, French, German');
    expect(element).not.toBeNull();
  });

  it('Should have borderCountries elements', async () => {
    borderCountries.forEach(country => {
      const element = screen.getByText(country);
      expect(element).not.toBeNull();
    });  
  });
});
