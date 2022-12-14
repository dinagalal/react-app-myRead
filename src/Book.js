import BookShelfChanger from "./BookShelfChanger";

const Book = ({book, moveTo, shelf}) =>{
    return (

        <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:`url(${book.imageLinks? book.imageLinks.thumbnail : ''})`
            }}
          ></div>
           <BookShelfChanger book={book} shelf={shelf} moveTo={moveTo}></BookShelfChanger>
       
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors ? book.authors : ""}</div>
       
      </div>
    )
};
export default Book