import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';

import CountryCard from './CountryCard';

describe('Renders CountryCard component correctly', async () => {

  const { container } = render(
    <CountryCard/>
  );
  
  // it('Should have children content', async () => {  
  //   const button = screen.getByText('Hello')
  //   expect(button).not.toBeNull();
  // });

});