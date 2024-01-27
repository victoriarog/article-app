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

  export default ArticleText;