function ArticleText({article}) {
    return (
      <div className='flex-item'>
        {article ? (
          <div className="textBox">
            <h3>{article.title}</h3>
            <p>{article.text}</p>
          </div>
        ) : (
            <div className="emptyTextBox">
                <p>Select an article</p>
            </div>
        )
        }
      </div>
    );
  }

  export default ArticleText;