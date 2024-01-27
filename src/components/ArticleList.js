function ArticleList({articles, onArticleClick}) {
    return (
      <div className='flex-item'>
        <ul>
          {articles.map((article, index) => (
            <li key = {article.id} onClick={() => onArticleClick(article)}>
              <div className="articleBox">
              <h1>{article.title}</h1>
              <h3>{article.undertitle}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
export default ArticleList;