    import React, { useState } from 'react';
    import List from './List';
    import Conversation from './Conversation';

    const Exercise2 = () => {
        const [state, setState] = useState({
            displayConversation: null,
            conversations: [
                {
                    with: "Laura", convo: [
                        { text: "Hi", sender: "self" },
                        { text: "You there?", sender: "self" },
                        { text: "Yeah, hi, what's up?", sender: "other" }
                    ]
                },
                {
                    with: "Dad", convo: [
                        { text: "Have you finished your school work yet?", sender: "other" },
                        { text: "Yes.", sender: "self" },
                        { text: "What do you mean, yes?", sender: "other" },
                        { text: "??", sender: "self" }
                    ]
                },
                {
                    with: "Shoobert", convo: [
                        { text: "Shoobert!!!", sender: "self" },
                        { text: "Dude!!!!!!!!", sender: "other" },
                        { text: "Shooooooooo BERT!", sender: "self" },
                        { text: "You're my best friend", sender: "other" },
                        { text: "No, *you're* my best friend", sender: "self" },
                    ]
                }
            ]
        });

        const displayConvo = (name) => {
            setState(prevState => ({
                ...prevState,
                displayConversation: name
            }));
        }

        const contacts = state.conversations.map(conv => conv.with);

        const goBack = () => {
            setState(prevState => ({ ...prevState, displayConversation: null }));
        }

        return (
            <div>
                {
                    state.displayConversation ? 
                    <Conversation 
                        convo={state.conversations.find(convo => convo.with === state.displayConversation).convo} 
                        sender={state.displayConversation} 
                        goBack={goBack}
                    /> :
                    <List contacts={contacts} displayConvo={displayConvo} />
                }
            </div>
        );
    }
    


    export default Exercise2;
