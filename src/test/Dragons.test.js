import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For better DOM assertions
import Dragons from '../components/dragons';

// Mocking useDispatch and useSelector
jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: (selectorFn) => selectorFn(
    {
      dragons: {
        dragons: [
          {
            flickr_images: [
              'https://i.imgur.com/9fWdwNv.jpg","https://live.staticflickr.com/8578/16655995541_078768dea2_b.jpg',
              'https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg',
            ],
            name: 'Dragon 1',
            description: 'Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS).',
            id: '5e9d058759b1ff74a7ad5f8f',
          },
          {
            flickr_images: [
              'https://farm8.staticflickr.com/7647/16581815487_6d56cb32e1_b.jpg',
              'https://farm1.staticflickr.com/780/21119686299_c88f63e350_b.jpg',
              'https://farm9.staticflickr.com/8588/16661791299_a236e2f5dc_b.jpg',
            ],
            name: 'Dragon 2',
            description: 'Dragon 2 (also Crew Dragon, Dragon V2, or formerly DragonRider) is the second version of the SpaceX Dragon spacecraft, which will be a human-rated vehicle. It includes a set of four side-mounted thruster pods with two SuperDraco engines each, which can serve as a launch escape system or launch abort system (LAS). In addition, it has much larger windows, new flight computers and avionics, and redesigned solar arrays, and a modified outer mold line from the initial cargo Dragon that has been flying for several years.',
            id: '5e9d058859b1ffd8e2ad5f90',
          },
        ],
      },
    },
  ),
}));

test('renders the Dragons component correctly', () => {
  const { container } = render(<Dragons />);
  expect(container).toMatchSnapshot();
});
