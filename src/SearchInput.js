const SearchInput = ({onSearch}) =>{
    
        const bookSearch = (event)=>{
         const newValue = event.target.value;
         onSearch(newValue)
      
        }

    return(
        <div className="search-books-input-wrapper">
        <input
              onChange={bookSearch}
              type="text"
              placeholder="Search by title, author, or ISBN"
              autoFocus
              
            />
            </div>
    )

};
export default SearchInput;