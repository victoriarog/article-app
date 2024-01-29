import { render, screen } from '@testing-library/react';
import ArticleText from '../components/ArticleText';

describe('ArticleText component', () => {
  it('renders "Select an article to read" when no article is provided', () => {
    render(
      <ArticleText article={null} />
    );

    const placeholderText = screen.getByText('Select an article to read');
    expect(placeholderText).toBeInTheDocument();
  });
});
