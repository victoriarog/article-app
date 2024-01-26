import { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search';

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
  const [searchArticle, setSearchedArticle] = useState('');

  useEffect(() => {
    fetch('/data/ArticleData.json')
    .then((response) => response.json())
    .then((data) => setArticles(data))
    .catch((error) => console.error('Error!', error));
  }, []);

  const handleArticleClick= (article) => {
    setSelectedArticle(article);
  };

  const handleSearchChange = (searchArticle) => {
    setSearchedArticle(searchArticle);
  };

  const filteredArticles = articles.filter((article) =>
  article.title.toLowerCase().includes(searchArticle.toLowerCase())
);


  return (
    <div className="App">
      <Search searchArticle={searchArticle} onSearchChange={handleSearchChange} />
      <div className='flex-container'>
        <ArticleList articles={articles} onArticleClick={handleArticleClick} />
        <ArticleText article={selectedArticle} />
      </div>
    </div>
  );
}

export default App;
