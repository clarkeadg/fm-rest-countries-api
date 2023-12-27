import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';

import Dropdown from './Dropdown';

describe('Renders Dropdown component correctly', async () => {

  const { container } = render(
    <Dropdown>
      Hello
    </Dropdown>
  );
  
  it('Should have children content', async () => {  
    const button = screen.getByText('Hello')
    expect(button).not.toBeNull();
  });

});