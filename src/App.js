import { useState, useEffect } from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import ArticleText from './components/ArticleText';
import VerticalLine from './components/VerticalLine';
import Search from './components/Search';

function App() {

  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [readArticles, setReadArticles] = useState({});
  const [searchArticle, setSearchArticle] = useState('');

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
      <Search searchArticle={searchArticle} setSearchArticle={setSearchArticle} />
      <div className='flex-container'>
        <ArticleList articles={articles} onArticleClick={handleArticleClick} readArticles={readArticles} searchArticle={searchArticle}/>
        <VerticalLine />
        <ArticleText article={selectedArticle} />
      </div>
    </div>
  );
}

export default App;
