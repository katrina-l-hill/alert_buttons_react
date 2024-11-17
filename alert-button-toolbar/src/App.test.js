import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import AlertButton from './AlertButton';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Normal test cases

test('renders AlertButton with correct text', () => {
  render(<AlertButton message="Test Message">Test Button</AlertButton>);
  const buttonElement = screen.getByText(/Test Button/i);
  expect(buttonElement).toBeInTheDocument();
});


test('calls alert with the correct message when clicked', () => {
  window.alert = jest.fn();
  render(<AlertButton message="Test Alert Message">Click Me</AlertButton>);
  const buttonElement = screen.getByText(/Click Me/i);
  fireEvent.click(buttonElement);
  expect(window.alert).toHaveBeenCalledWith('Test Alert Message');
});


test('renders multiple AlertButton components and verifies their texts', () => {
  render(
    <div>
      <AlertButton message="Message 1">Button 1</AlertButton>
      <AlertButton message="Message 2">Button 2</AlertButton>
    </div>
  );
  expect(screen.getByText(/Button 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Button 2/i)).toBeInTheDocument();
});

// Edge test cases

test('renders an AlertButton without children text', () => {
  render(<AlertButton message="No Child Text" />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toBeEmptyDOMElement(); 
});


test('handles a very long message', () => {
  const longMessage = 'A'.repeat(1000);
  window.alert = jest.fn();
  render(<AlertButton message={longMessage}>Long Message Button</AlertButton>);
  const buttonElement = screen.getByText(/Long Message Button/i);
  fireEvent.click(buttonElement);
  expect(window.alert).toHaveBeenCalledWith(longMessage);
});


test('does not call alert when button is disabled', () => {
  window.alert = jest.fn();
  render(<button disabled onClick={() => alert('Should not alert')}>Disabled Button</button>);
  const buttonElement = screen.getByText(/Disabled Button/i);
  fireEvent.click(buttonElement);
  expect(window.alert).not.toHaveBeenCalled();
});