import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';

import CountryDetails from './CountryDetails';

describe('Renders CountryDetails component correctly', async () => {

  const { container } = render(
    <CountryDetails/>
  );
  
  // it('Should have children content', async () => {  
  //   const button = screen.getByText('Hello')
  //   expect(button).not.toBeNull();
  // });

});