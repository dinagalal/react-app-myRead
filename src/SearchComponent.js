import {Link} from "react-router-dom";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

const SearchComponent = ({onSearch, allBooks, query, moveTo, onResetSearch})=>{
  
    return(
        <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" >
            <button onClick={onResetSearch} className="close-search" >Close</button>
            
          </Link>
          
            <SearchInput onSearch={onSearch} />
          
        </div>
        <SearchResults allBooks={allBooks} query={query} moveTo={moveTo}/>
       
      </div>
    )
};
export default SearchComponent