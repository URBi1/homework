import React from 'react';

const Conversation = (props) => {
    return (
        <div>
        <h2>Conversation with {props.sender}</h2>
        {props.convo.map((message, index) => (
            <div key={index}>
                <span className="sender">{message.sender === "self" ? "Me" : props.sender}:</span> 
                {message.text}
            </div>
        ))}
        <button className="back" onClick={props.goBack}>Back</button>
    </div>
    );
}

export default Conversation;
