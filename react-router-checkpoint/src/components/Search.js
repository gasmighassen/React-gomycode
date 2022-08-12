import React,{useState} from 'react'
import Home from './Home';



const Search = () => {
    const [search, setSearch] = useState('');
    return (
      <div className="wrapper">
        <h1>Search</h1>
        <form>
          <input
            onChange={(e) => setSearch(e.target.value)}
            typeof="text"
            placeholder="Type movie title/rating here ..."
          ></input>
        </form>
        <Home search={search} />
      </div>
    );
  };

export default Search