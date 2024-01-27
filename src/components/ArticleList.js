function ArticleList({articles, onArticleClick}) {
    return (
      <div className='flex-item'>
        <ul>
          {articles.map((article, index) => (
            <li key = {article.id} onClick={() => onArticleClick(article)}>
              <div>
              {article.title}
              {article.undertitle}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
export default ArticleList;