import "./App.css";
import { useState, useEffect } from "react";
import { Routes,Route} from "react-router-dom";
import ListBooks from "./ListBooks";
import SearchComponent from "./SearchComponent";
import * as BooksAPI from './BooksAPI';


const BookShelves = [
  {key:"currentlyReading", name:"Currently reading"},
  {key:"wantToRead", name:"Want to Read"},
  {key:"read", name:"Read"}
]


const App = () =>{
  const [searchQuery, setSearchQuery] = useState([]);
  const [allBooks, setAllBooks] = useState([]);

  
//Get all Data from API (show all books)
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setAllBooks(res);
      
    
    };
    
    getBooks();
   
  }, []);

// update the book and where to  

const updateTheShelf = (book,toShelf) =>{
  BooksAPI.update(book,toShelf);
  let updatedBooks = [];
  updatedBooks = allBooks.filter(b => b.id != book.id);

  if(toShelf !="none"){
    book.shelf = toShelf
    updatedBooks = updatedBooks.concat(book)
  }

   setAllBooks(updatedBooks);
 
  
     
}



const searchForBooks = (query=> {
   if(query.length > 0){
    BooksAPI.search(query).then(data=> {
      if(data.error){
        setSearchQuery([]);
      }
      else{
        setSearchQuery(data)
      }

   })
  }
  else{
    setSearchQuery([]);
  }
});
const resetSearch = ()=>{
  setSearchQuery([]);
}



  return (
   
      <Routes>
             
            <Route exact path="/" element = {<ListBooks bookshelves={BookShelves} allBooks={allBooks} moveTo={updateTheShelf}/>} />
            <Route exact path="/search" element={<SearchComponent onSearch={searchForBooks} moveTo={updateTheShelf} allBooks={allBooks}
            query={searchQuery} onResetSearch={resetSearch}
            />}/>
       
      </Routes>
      
    
  );
}

export default App;
