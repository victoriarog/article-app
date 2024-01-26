function Search({searchArticle, onSearchChange}) {
    const handleChange = (e) => {
        onSearchChange(e.target.value)
    };
    
    return (
        <div>
            <input
            type="text"
            placeholder="Search..."
            value={searchArticle}
            onChange={handleChange}
            />
        </div>
    )
}

export default Search;