function ArticleText({article}) {
    return (
      <div className='flex-item2'>
        {article ? (
          <div className="textBox">
            <h1>{article.title}</h1>
            <p>{article.text}</p>
          </div>
        ) : (
            <div className="textBox">
                <h1>Select an article</h1>
            </div>
        )
        }
      </div>
    );
  }

  export default ArticleText;