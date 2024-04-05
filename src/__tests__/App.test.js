import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../App.jsx';

it('renders without crashing', function() {
    render(<App />);
})

it('matches snapshot', function() {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
})

it('check contents', function() {
    const { getByText } = render(<App />);
    expect(getByText('To Do:', { exact: false })).toBeInTheDocument();
    expect(getByText('Boxes:', { exact: false })).toBeInTheDocument();
})