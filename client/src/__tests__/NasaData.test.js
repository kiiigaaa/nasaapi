import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // This adds custom matchers to Jest's expect

import NasaData from '../components/NasaAPI/nasaData';

// Mocking the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        title: 'Test Title',
        date: '2024-05-03',
        explanation: 'Test explanation',
        url: 'https://example.com/test-image.jpg',
        hdurl: 'https://example.com/test-hd-image.jpg',
      }),
  })
);

describe('NasaData Component', () => {
  it('renders NASA data correctly', async () => {
    // Render the component
    const { getByText, getByAltText } = render(<NasaData />);

    // Wait for the fetch to complete and data to be rendered
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());

    // Assert that the data is rendered correctly
    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('2024-05-03')).toBeInTheDocument();
    expect(getByText('Test explanation')).toBeInTheDocument();
    expect(getByAltText('Test Title')).toHaveAttribute(
      'src',
      'https://example.com/test-image.jpg'
    );
    expect(getByText('https://example.com/test-hd-image.jpg')).toBeInTheDocument();
  });
});
