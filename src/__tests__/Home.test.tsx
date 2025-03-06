import {render, screen} from '@testing-library/react';
import Home from '@/app/page';

test('renders homepage content', () => {
    render(<Home />)
  
    expect(
      screen.getByText('My skills and Responsibilities in Web Development')
    ).toBeInTheDocument()
  })
