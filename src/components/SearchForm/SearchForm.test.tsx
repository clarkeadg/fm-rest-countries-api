import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';

import SearchForm from './SearchForm';

describe('Renders SearchForm component correctly', async () => {

  const { container } = render(
    <SearchForm/>
  );
  
  it('Should have a form element', async () => {  
    const element = screen.getByTestId('search-form')
    expect(element).not.toBeNull();
  });

});
