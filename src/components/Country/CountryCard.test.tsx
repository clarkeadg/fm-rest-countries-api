import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import CountryCard from './CountryCard';

describe('Renders CountryDetails component correctly', async () => {

  render(
    <CountryCard
      flag={"https://flagcdn.com/de.svg"}
      title={"Belgium"}
      population={"11,319,511"}
      region={"Europe"}
      capital={"Brussels"}
    />
  );
  
  it('Should have title element', async () => {  
    const element = screen.getByText('Belgium');
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

  it('Should have capital element', async () => {  
    const element = screen.getByText('Brussels');
    expect(element).not.toBeNull();
  });
});
