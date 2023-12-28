import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import SearchForm from './SearchForm';

describe('Renders SearchForm component correctly', async () => {

  render(
    <SearchForm query="" setQuery={()=>{}}/>
  );
  
  it('Should have a form element', async () => {  
    const element = screen.getByTestId('search-form')
    expect(element).not.toBeNull();
  });

});
