import { render, fireEvent, screen } from '@testing-library/react';
import Search from '../components/Search';

describe('Search component', () => {
  it('should update searchArticle state on input change', () => {

    const mockSetSearchArticle = jest.fn();
    render(
      <Search searchArticle="" setSearchArticle={mockSetSearchArticle} />
    );

    const inputElement = screen.getByPlaceholderText('Search for an article here');
    fireEvent.change(inputElement, { target: { value: 'test article' } });
    expect(mockSetSearchArticle).toHaveBeenCalledWith('test article');
  });
});
