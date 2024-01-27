import { useState, useEffect } from 'react';
import './App.css';
// import Search from './components/Search';
import ArticleList from './components/ArticleList';
import ArticleText from './components/ArticleText';

function App() {

  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  // const [searchArticle, setSearchedArticle] = useState('');

  useEffect(() => {
    fetch('/data/ArticleData.json')
    .then((response) => response.json())
    .then((data) => setArticles(data))
    .catch((error) => console.error('Error!', error));
  }, []);

  const handleArticleClick= (article) => {
    setSelectedArticle(article);
  };

  // const handleSearchChange = (searchArticle) => {
  //   setSearchedArticle(searchArticle);
  //   console.log(searchArticle);
  // };

  return (
    <div className="App">
      {/* <Search searchArticle={searchArticle} onSearchChange={handleSearchChange} /> */}
      <div className='flex-container'>
        <ArticleList articles={articles} onArticleClick={handleArticleClick} />
        <ArticleText article={selectedArticle} />
      </div>
    </div>
  );
}

export default App;
