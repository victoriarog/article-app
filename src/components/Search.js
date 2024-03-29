function Search({searchArticle, setSearchArticle}) {
    const handleSearchChange = (e) => {
        setSearchArticle(e.target.value)
    };
    
    return (
        <div>
            <input
            type="text"
            placeholder="Search for an article here"
            value={searchArticle}
            onChange={handleSearchChange}
            />
        </div>
    )
}

export default Search;