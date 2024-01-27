import { useState, useEffect } from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import ArticleText from './components/ArticleText';
import VerticalLine from './components/VerticalLine';

function App() {

  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [readArticles, setReadArticles] = useState({});

  useEffect(() => {
    fetch('/data/ArticleData.json')
    .then((response) => response.json())
    .then((data) => setArticles(data))
    .catch((error) => console.error('Error!', error));
  }, []);

  const handleArticleClick= (article) => {
    setSelectedArticle(article);
    setReadArticles({ ...readArticles, [article.id]: true });
  };

  return (
    <div className="App">
      <div className='flex-container'>
        <ArticleList articles={articles} onArticleClick={handleArticleClick} readArticles={readArticles}/>
        <VerticalLine />
        <ArticleText article={selectedArticle} />
      </div>
    </div>
  );
}

export default App;
