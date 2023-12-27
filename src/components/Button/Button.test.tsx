import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';

import Button from './Button';

describe('Renders Button component correctly', async () => {

  const { container } = render(
    <Button>
      Hello
    </Button>
  );
  
  it('Should have children content', async () => {  
    const button = screen.getByText('Hello')
    expect(button).not.toBeNull();
  });

});