function ArticleText({article}) {
    return (
      <div className='flex-item2'>
        {article ? (
          <div className="textBox">
            <h1 style={{fontSize: '4vh'}}>{article.title}</h1>
            <p>{article.text}</p>
          </div>
        ) : (
            <div className="textBox">
                <h1 style={{fontSize: '3vh'}}>Select an article to read</h1>
            </div>
        )
        }
      </div>
    );
  }

  export default ArticleText;