import Book from "./Book"
const bookshelf = ({shelf})=>{

    return(

        <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.name}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                      <li>
                          <Book></Book>
                      </li>

                  </ol>
                  </div>
                  </div>
    )

}
export default bookshelf