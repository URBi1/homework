import React from 'react';
import Contact from './Contact';

const List = ({ contacts, displayConvo }) => {
    return (
        <div>
        <h2>List of Contacts</h2>
        {
            contacts.map((contact, index) => <Contact key={index} name={contact} displayConvo={displayConvo} />)
        }
    </div>
    );
}

export default List;
