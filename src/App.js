import { useState, useEffect } from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import ArticleText from './components/ArticleText';

function App() {

  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

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
