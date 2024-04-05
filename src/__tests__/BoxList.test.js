import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import BoxList from '../components/color-box/BoxList';

it('renders properly', function() {
    render(<BoxList />);
})

it('Matches snapshot', function() {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})

it('Correct info are rendering', function() {
    const { getByText } = render(<BoxList />);
    
    expect(getByText('Boxes:', { exact: false })).toBeInTheDocument();
})

it('can get new boxes', function() {
    const {getByText, getByLabelText} = render(<BoxList />);

    //Checks a box does not exist
    expect(document.querySelector('.aBox')).not.toBeInTheDocument();

    const colorInput = getByLabelText("Color:", { exact: false });
    const widthInput = getByLabelText("Width px:", { exact: false });
    const HeightInput = getByLabelText("Height px:", { exact: false });
    const submit = getByText('Add Box');

    fireEvent.change(colorInput, { target: { value: "blue" }});
    fireEvent.change(widthInput, { target: { value: 50 }});
    fireEvent.change(HeightInput, { target: { value: 50 }});
    fireEvent.click(submit);

    //Checks that a box exists after the form is submitted
    expect(document.querySelector('.aBox')).toBeInTheDocument();

})

it('can delete box', function() {
    const {getByText, getByLabelText} = render(<BoxList />);

    const colorInput = getByLabelText("Color:", { exact: false });
    const widthInput = getByLabelText("Width px:", { exact: false });
    const HeightInput = getByLabelText("Height px:", { exact: false });
    const submit = getByText('Add Box');

    fireEvent.change(colorInput, { target: { value: "blue" }});
    fireEvent.change(widthInput, { target: { value: 50 }});
    fireEvent.change(HeightInput, { target: { value: 50 }});
    fireEvent.click(submit);

    //Checks that the box was made
    const box = document.querySelector('.aBox')
    expect(box).toBeInTheDocument();
    
    // Clicks box
    fireEvent.click(box);

    //Checks box was deleted
    expect(box).not.toBeInTheDocument();
})