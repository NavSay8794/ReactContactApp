import React from 'react';
import { Link } from 'react-router-dom'
import user from '../images/user.png'
const ContactCard = (props) => {

    const { id, name, email, mobileNumber } = props.contact

    return (
        <div className="item">
            <div className="content contact-list">
                <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>
                    <div className="innercontent">
                        <img className="ui avatar image" src={user} alt="user" />
                        <div>
                            <div className="header">
                                {name}
                            </div>
                            <div>{email}</div>
                            <div>{mobileNumber}</div>
                        </div>
                    </div>
                </Link>

                <div className="iconStyles">
                    {/* <Link to={{pathname: `/confirmDelete`, state:{id:id , clickHandler: clickHandler}}}> */}
                    <i className="trash alternate outline icon" style={{ color: "red", marginTop: '15px' }}
                        onClick={() => { props.clickHandler(id) }} />
                    {/* </Link> */}
                    <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
                        <i className="edit alternate outline icon" style={{ color: "blue", marginTop: '15px' }}
                            />
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default ContactCard