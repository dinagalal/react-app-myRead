

const BookShelfChanger = ({book,moveTo, shelf}) =>

{
  
  const changeBookShelf = (event) =>
  {
    const value = event.target.value;
    moveTo(book,value)
    
  }
  return(
    <div className="book-shelf-changer">
    <select onChange={changeBookShelf} defaultValue={book.shelf}>
      <option value="none" disabled>
        Move to...
      </option>
      <option value="currentlyReading">
        Currently Reading
      </option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>
)

};
export default BookShelfChanger