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
  // const [showSearchPage, setShowSearchpage] = useState(false);
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
  const updatedBooks = allBooks.map((bok)=>{
    if(bok.id === book.id){
      bok.shelf = toShelf
      return book
    }
   return bok
  }
  )
  setAllBooks(updatedBooks);
  BooksAPI.update(book,toShelf).then(data => console.log(data));
     
}


  

  return (
   
      <Routes>
             
            <Route exact path="/" element = {<ListBooks bookshelves={BookShelves} allBooks={allBooks} moveTo={updateTheShelf}/>} />
            <Route exact path="/search" element={<SearchComponent/>}/>
       
      </Routes>
      
    
  );
}

export default App;
