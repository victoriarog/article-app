import { useState, useEffect } from 'react';
import './App.css';

function ArticleList({articles, onArticleClick}) {
  return (
    <div className='flex-item'>
      <ul>
        {articles.map((article, index) => (
          <li key = {article.id} onClick={() => onArticleClick(article)}>
            {article.title}
            {article.undertitle}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ArticleText({article}) {
  return (
    <div className='flex-item'>
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>{article.text}</p>
        </div>
      )
      }
    </div>
  );
}

function App() {

  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState([null]);

  useEffect(() => {
    fetch('/data/ArticleData.json')
    .then((response) => response.json())
    .then((data) => setArticles(data))
    .catch((error) => console.error('Error!', error));
  }, []);

  const handleArticleClick= (article) => {
    setSelectedArticle(article);
  };


  return (
    <div className="App">
      <div className='flex-container'>
        <ArticleList articles={articles} onArticleClick={handleArticleClick} />
        <ArticleText article={selectedArticle} />
      </div>
    </div>
  );
}

export default App;
