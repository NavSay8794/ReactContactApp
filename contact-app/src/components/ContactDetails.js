import React from 'react'
import { Link } from 'react-router-dom'
import user from '../images/user.png'

const ContactDetails = (props) =>{
    const {name , email, mobileNumber} = props.location.state.contact
    console.log(props)
    return(
        <div className="main">
            <div className= "ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">Email: {email}</div>
                    <div className="description">Contact No: {mobileNumber}</div>
                </div>
            </div>
            <div className="center-div" style={{display: 'flex', justifyContent: 'center'}}>
                <Link to={'/'}>
                <button className="ui button blue center">Back To Contact List</button>
                </Link>
            </div>
        </div>
    )
}


export default ContactDetails