import BookShelf from "./BookShelf";
import {Link} from "react-router-dom";
const ListBooks = ({bookshelves}) =>{

    return(
        
        <div className="list-books">
       
        <div className="list-books-title">
         <h1>MyReads</h1>
         </div>
           <div className="list-books-content">
               {
                   bookshelves.map((shelf)=>{
                    <BookShelf 
                    key={shelf.key}
                    shelf={shelf}/>

                   }
                   )
               }
            
           
           </div>
           <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
    )
    
};
export default ListBooks