import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Todo from "./Todo";

test('Рендерит заголовок и кнопку', () =>{
    render(<Todo/>)
    expect(screen.getByText('My Todo List')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
})

test('добавляет новую задачу', () =>{
    render(<Todo/>);
    const input = screen.getAllByPlaceholderText('Enter task')
    const button = screen.getByText('Add')
    fireEvent.change(input, {target: {value: 'Сделать дз'}})
    fireEvent.click(button)
    expert(screen.getByText('Сделать дз')).toBeInTheDocument()
})

test('удаляет задачу', () => {
    render(<Todo />)
    const input = screen.getAllByPlaceholderText('Enter task')
    const button = screen.getByText('Add')
    fireEvent.change(input, {target: {value: 'Проверить почту'}})
    fireEvent.click(button)
    const deleteButton = screen.getAllByText('Delete')
    fireEvent.click(deleteButton)
    expect(screen.queryByText('Проверить почту')).toBeInTheDocument
})

test('не добавляет пустую задачу', () => {
    render(<Todo />)
    const input = screen.getAllByPlaceholderText('Add')
    const button = screen.getByText('Add')
    fireEvent.change(input, {target: {value: 'Проверить почту'}})
    fireEvent.click(button)
    const listItems = screen.getAllByText('listItem')
    expect(listItems.length).toBe(0)
})





