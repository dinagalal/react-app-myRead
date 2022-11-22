import Book from "./Book"
const bookshelf = ({shelf, allBooks, moveTo})=>{
    
    const booksOnShelf = allBooks.filter((mybook)=> mybook.shelf === shelf.key)
    
    return(

        <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.name}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                      {
                          booksOnShelf.map((book)=>(
                              <Book book={book} key={book.id} moveTo={moveTo} shelf={shelf}></Book>
                             
                          ))
                      }dd

                  </ol>
                  </div>
                  </div>
    )

}
export default bookshelf