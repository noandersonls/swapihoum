// NAVBAR TEST WIP EXAMPLE
import React from 'react';
import { Router } from 'react-router-dom';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import { ThemeProvider } from 'styled-components';
import { BREAKPOINTS, COLORS } from '../../constants';

import NavBar from './index';

test('Render NavBar component', async () => {
  render(
    <ThemeProvider theme={{ colors: COLORS, breakpoints: BREAKPOINTS }}>
      <NavBar />
    </ThemeProvider>,
  );
  await screen.findByText(/SWAPI x/);
  expect(screen.queryByText(/SWAPI x/)).toBeInTheDocument();
});

test('Expects Links to be in Nav Bar', async () => {
  render(
    <ThemeProvider theme={{ colors: COLORS, breakpoints: BREAKPOINTS }}>
      <NavBar />
    </ThemeProvider>,
  );
  const Login = await screen.findByText(/Login/);
  const Faqs = await screen.findByText(/FAQs/);

  // Another option
  // expect(screen.getByRole('link', { name: /FAQs/i })).toBeInTheDocument();

  expect(Login).toBeInTheDocument();
  expect(Faqs).toBeInTheDocument();
});

// test('To Render Login View after click Login', async () => {
//   const history = createMemoryHistory();
//   render(
//     <ThemeProvider theme={{ colors: COLORS, breakpoints: BREAKPOINTS }}>
//       <Router location={history.location} navigator={history}>
//         <NavBar />
//       </Router>
//     </ThemeProvider>,
//   );
//   // fireEvent.click(screen.getByText(/Faqs/i));
//   const LoginButton = await screen.getByTestId('login-button');
//   fireEvent.click(LoginButton);
//   expect(history.location.pathname).toBe('/login');
// });
