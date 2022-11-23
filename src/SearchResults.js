import Book  from "./Book";

const SearchResults = ({shelf,moveTo,allBooks, query}) =>
{
    const bookResults = query.map( book =>{
        allBooks.map( b =>{
            if(book.id === b.id){
               book.shelf = b.shelf
            }
            return b;
        })
        return book;
    });



    return(
    <div className="search-books-results">
        <ol className="books-grid">

           {
                bookResults.map((book)=>(
                    <Book book={book} 
                        key={book.id}
                        moveTo={moveTo}
                        shelf={shelf}>

                      </Book>
                   
                ))
           }
        </ol>
    </div>
    )
};

export default SearchResults;