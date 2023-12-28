import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';

import ThemeSwitcher from './ThemeSwitcher';
import ThemeContextProvider from './ThemeContext';

describe('Renders ThemeSwitcher component correctly', async () => {

  render(
    <ThemeContextProvider>
      <ThemeSwitcher/>
    </ThemeContextProvider>
  );
  
  it('Should have a sun icon', async () => {  
    fireEvent.click(screen.getByTestId('theme-switcher'));

    const buttonText = screen.getByText('Light Mode');
    expect(buttonText).not.toBeNull();
  });

  it('Should have a moon icon', async () => {  
    fireEvent.click(screen.getByTestId('theme-switcher'));

    const buttonText = screen.getByText('Dark Mode');
    expect(buttonText).not.toBeNull();
  });

});