import React from 'react';
import { render } from '@testing-library/react';
import Main from './Main';

test('renders table properly', () => {
  const { getBy } = render(<Main />);
  const table = getBy('#multiTable');
  console.log(table);
  expect(table).toBeInTheDocument();
});
