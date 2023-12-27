import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';

import SearchForm from './SearchForm';

describe('Renders Dropdown component correctly', async () => {

  const { container } = render(
    <SearchForm/>
  );
  
  // it('Should have children content', async () => {  
  //   const button = screen.getByText('Hello')
  //   expect(button).not.toBeNull();
  // });

});