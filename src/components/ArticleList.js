import { useState, useEffect } from "react";
import Pagination from "./Pagination";

function ArticleList({ articles, onArticleClick, readArticles, searchArticle }) {
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 10;

    const filteredArticles = articles.filter((article) => 
        article.title.toLowerCase().includes(searchArticle.toLowerCase()) ||
        article.undertitle.toLowerCase().includes(searchArticle.toLowerCase()) ||
        article.text.toLowerCase().includes(searchArticle.toLowerCase())
    ); 

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

    const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchArticle]);

    return (
      <div className='flex-item1'>
        <ul>
          {currentArticles.map((article) => (
            <li key={article.id} onClick={() => onArticleClick(article)}>
              <div className="articleBox"
                style={{ 
                    backgroundColor: readArticles[article.id] ? 'rgba(169, 169, 169, 0.25)' : 'transparent'
                }}
                >
                  <h1>{article.title}</h1>
                  <h3>{article.undertitle}</h3>
              </div>
            </li>
          ))}
        </ul>
        {filteredArticles.length > articlesPerPage && (
            <Pagination 
                currentPage={currentPage} 
                totalPages={Math.ceil(filteredArticles.length / articlesPerPage)} 
                onPageChange={onPageChange} 
            />
        )}
      </div>
    );
}
  
export default ArticleList;
