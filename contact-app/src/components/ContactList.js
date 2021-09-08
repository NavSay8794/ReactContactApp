import React from 'react';
import ContactCard from './ContactCard'

import { Link } from 'react-router-dom'

const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.getContactId(id)
    }

    const renderContactlist = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
        )
    });
    return (
        <div className="ui main">
            <div className="ui celled list">
                <h2 style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Contact List</span>
                    <Link to='/addContact'>
                        <button className="ui button blue right">Add Contact</button>
                    </Link>
                </h2>
                {renderContactlist}
            </div>
        </div>
    )
}

export default ContactList