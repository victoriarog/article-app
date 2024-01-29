import { render, fireEvent, screen } from '@testing-library/react';
import ArticleList from '../components/ArticleList';

describe('ArticleList component', () => {
  const articles = [
    { id: 1, title: 'Title 1', undertitle: 'Undertitle 1', text: 'Text 1' },
    { id: 2, title: 'Title 2', undertitle: 'Undertitle 2', text: 'Text 2' },
    { id: 3, title: 'Title 3', undertitle: 'Undertitle 3', text: 'Text 3' }
  ];

  const readArticles = {};
  const searchArticle = '';

  it('renders list of articles correctly', () => {
    const mockOnArticleClick = jest.fn();

    render(
      <ArticleList articles={articles} onArticleClick={mockOnArticleClick} readArticles={readArticles} searchArticle={searchArticle} />
    );

    articles.forEach(article => {
      const articleTitle = screen.getByText(article.title);
      expect(articleTitle).toBeInTheDocument();
    });
  });

  it('onArticleClick is called when article is clicked', () => {
    const mockOnArticleClick = jest.fn();

    render(
      <ArticleList articles={articles} onArticleClick={mockOnArticleClick} readArticles={readArticles} searchArticle={searchArticle} />
    );

    fireEvent.click(screen.getByText('Title 1'));
    expect(mockOnArticleClick).toHaveBeenCalledWith(articles[0]);
  });
});
