import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import TodoList from '../components/Todo/TodoList';

it('renders properly', function() {
    render(<TodoList />);
})

it('Matches snapshot', function() {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
})

it('Correct info are rendering', function() {
    const { getByText } = render(<TodoList />);
    
    expect(getByText('To Do:', { exact: false })).toBeInTheDocument();
})

it('can get new todo', function() {
    const {getByText, getByLabelText} = render(<TodoList />);

    //Checks a todo does not exist
    expect(document.querySelector('.Todo')).not.toBeInTheDocument();

    const textInput = getByLabelText("What to do?", { exact: false });
    const submit = getByText('Submit!');

    fireEvent.change(textInput, { target: { value: "Test Todo" }});
    fireEvent.click(submit);

    //Checks that a box exists after the form is submitted
    expect(document.querySelector('.Todo')).toBeInTheDocument();

})

it('can delete todo', function() {
    const {getByText, getByLabelText} = render(<TodoList />);

    const textInput = getByLabelText("What to do?", { exact: false });
    const submit = getByText('Submit!');

    fireEvent.change(textInput, { target: { value: "Test Todo" }});
    fireEvent.click(submit);

    //Checks that the todo was made
    expect(document.querySelector('.Todo')).toBeInTheDocument();
    const x = getByText('x');
    fireEvent.click(x);

    expect(document.querySelector('.Todo')).not.toBeInTheDocument();
    

})