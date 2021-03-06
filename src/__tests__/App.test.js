import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

// describe('Header tests', =>{
  
// })

// This test makes sure that the application always has this specific text as the heading
it('should find the test of the header', () => {
  // the file we are testing
  render(<App />);
// query methods we are using
  const headerElement = screen.getByText(/My Calculator/i);
  // assertions
  expect(headerElement).toBeInTheDocument();
});

it('should find the element of the header', () =>{
  render(<App />);
  const headingElement = screen.getByRole('heading', {name:'My Calculator'});
  expect(headingElement).toBeInTheDocument();
})

it('should have a h1 as the main header element', () =>{
  render(<App />);
  const headingElementType = screen.getByText(/My Calculator/i)
  expect(headingElementType).toContainHTML('h1');
})


it('should display 4 when the user enters 2+2', () => {
  render(<App />);
  const twoButton = screen.getByText('2');
  const plusButton = screen.getByText('+');
  const equalsButton = screen.getByText('=');
  
  fireEvent.click(twoButton);
  fireEvent.click(plusButton);
  fireEvent.click(twoButton);
  fireEvent.click(equalsButton);

  const display = screen.getByTestId('display')
  expect(display).toHaveTextContent("4")
})


// should display 3 when are user enters 6/2
// should  display 6 when a user enters 3*2