import React from 'react'
import {Link} from 'react-router-dom'



function NavBar() {

  return (
   
        <div className="navigation">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/search'>Search</Link></li>
                <li><Link to='/add'>Add movie</Link></li>
            </ul>
        </div>
    
  
  )
}

export default NavBar