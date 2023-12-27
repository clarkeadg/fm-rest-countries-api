import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import ThemeContextProvider from '../components/ThemeSwitcher/ThemeContext'
import ErrorPage from './ErrorPage';

describe('Renders Error Page component correctly', async () => {

  const { container } = render(
    <ThemeContextProvider>
      <ErrorPage/>
    </ThemeContextProvider>
  );

  const main = container.querySelector('main');
  const title = container.querySelector('h1');
  
  it('Should have a main tag', async () => {  
    expect(main).not.toBeNull();
  });

  it('Should have an h1 tag', async () => {  
    expect(title).not.toBeNull();
  });
});