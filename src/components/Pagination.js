function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];

  for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
    const isActive = pageNumber === currentPage;
    const buttonStyle = {
      backgroundColor: isActive ? '#E7ACA7' : '#ECEEF0'
    }

    pages.push(
      <button 
        key={pageNumber} 
        onClick={() => onPageChange(pageNumber)} 
        style={buttonStyle}
        className="paginationButton"
      >
        {pageNumber}
      </button>
    );
  }

  return (
  <div className="pagination">
    {pages}
  </div>
  );
}

export default Pagination;