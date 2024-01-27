function ArticleList({articles, onArticleClick, readArticles}) {
    return (
      <div className='flex-item1'>
        <ul>
          {articles.map((article, index) => (
            <li key = {article.id} onClick={() => onArticleClick(article)}
            style={{ 
                backgroundColor: readArticles[article.id] ? 'rgba(169, 169, 169, 0.5)' : 'transparent' 
              }}>
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