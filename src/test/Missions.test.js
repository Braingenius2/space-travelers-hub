import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For better DOM assertions
import Missions from '../components/missions';

// Mocking useDispatch and useSelector
jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: (selectorFn) => selectorFn(
    { missions: { missions: [] } },
  ),
}));

test('renders the Empty Missions component correctly', () => {
  const { container } = render(<Missions />);
  expect(container).toMatchSnapshot();
});
