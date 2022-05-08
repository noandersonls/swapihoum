// NAVBAR TEST WIP EXAMPLE
import React from 'react';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
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

// test('To Render Login View after click Login', async () => {
//   render(
//     <ThemeProvider theme={{ colors: COLORS, breakpoints: BREAKPOINTS }}>
//       <NavBar />
//     </ThemeProvider>,
//   );
//   await screen.findByText(/SWAPI x/);
//   fireEvent.click(screen.getByText(/Login/i));
//   expect(screen.getByText(/Register/)).toBeInTheDocument();
// });
