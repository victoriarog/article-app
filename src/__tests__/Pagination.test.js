import { render, fireEvent, screen } from '@testing-library/react';
import Pagination from '../components/Pagination';

describe('Pagination component', () => {
  const onPageChange = jest.fn();

  it('renders buttons with correct page numbers', () => {
    render(
      <Pagination currentPage={1} totalPages={2} onPageChange={onPageChange} />
    );

    for (let pageNumber = 1; pageNumber <=2; pageNumber++) {
      const button = screen.getByText(pageNumber.toString());
      expect(button).toBeInTheDocument();
    }
  });

  it('calls onPageChange with correct page number when button is clicked', () => {
    render(
      <Pagination currentPage={1} totalPages={2} onPageChange={onPageChange} />
    );

    fireEvent.click(screen.getByText('2'));
    expect(onPageChange).toHaveBeenCalledWith(2);

  });

  it('applies active style to current page button', () => {
    render(
      <Pagination currentPage={1} totalPages={2} onPageChange={onPageChange} />
    );

    const activeButton = screen.getByText('1');
    expect(activeButton).toHaveStyle('background-color: #E7ACA7');
  });
});
