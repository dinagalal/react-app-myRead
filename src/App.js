import "./App.css";
import { useState } from "react";
import {Link, Routes,Route} from "react-router-dom";
import ListBooks from "./ListBooks";
import SearchComponent from "./SearchComponent";

const BookShelves = [
  {key:"currentlyReading", name:"Currently reading"},
  {key:"wantToRead", name:"Want to Read"},
  {key:"read", name:"Read"}
]


const App = () =>{
  // const [showSearchPage, setShowSearchpage] = useState(false);

  return (
   
      <Routes>
             
            <Route exact path="/" element = {<ListBooks bookshelves={BookShelves}/>} />
            <Route exact path="/search" element={<SearchComponent/>}/>
       
      </Routes>
      
    
  );
}

export default App;
