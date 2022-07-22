import React from 'react'
import PropTypes from 'prop-types'
import "./Profile.css"
const Profile = (props) => {
  return (
    <>
    <div className='myprofile'>
       {props.children}
        <img src={props.person.image} alt=""/>
       
        <div className='myname'>
            <h1>
            {props.person.Fullname}
            </h1>
        </div>
        <div className='mybio'>
            <h1>My Biography</h1>
            <h2>{props.person.Bio}</h2> 
        </div>
        <div className='mypro'>
            <h1>My Profession</h1>
            <h2>{props.person.Profession}</h2>
            </div>
           
    </div>
    <div className='mybtn'>
                <button onClick={props.clickMe}>click me </button>
    </div>
    </>
    
    
  )
}
Profile.propTypes = {
    name: PropTypes.string.isRequired,
    mybio: PropTypes.string.isRequired,
    myprofession: PropTypes.string.isRequired,
    clickMe: PropTypes.func.isRequired
}
Profile.defaultProps = {
    name: 'Gasmi Ghassen',
    mybio: 'I am a web developer',
    myprofession: 'Web Developer',
    clickMe: () => alert('click me')
}
export default Profile