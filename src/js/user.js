import React, {useEffect, useState} from 'react';
import UsersLogged from "./usersLogged";

function User({name}) {
    const [text, setText] = useState('');
    const [textTyped, setTextTyped] = useState('');
    const [textUser, setTextUser] = useState('');
    const [nameGotten, setName] = useState('');

    useEffect(() => {
        const channel = window.Ably.channels.get('Default')
        channel.subscribe('system', function (message) {
            setText(message.data);
        });
        channel.subscribe(name, function (message) {
            setTextUser(message.data);
        });

    }, []);

    function sendAndClean(texto) {
        const channel = window.Ably.channels.get('Default')
        channel.publish(nameGotten, texto);
        setTextTyped('');
    }

    function nameToChat(nameReturned) {

        setName(nameReturned)
    }

    function renderUserContent() {
        return (
            <div className='body-user'>
                <div className='chats'>
                    <label className='label-chat'>Chat with user:</label>
                    <textarea
                        className="form-control-2"
                        id="exampleFormControlTextarea2"
                        rows="5"
                        value={textUser}
                    />
                    <input type='text' value={textTyped} onChange={e => setTextTyped(e.target.value)} name='broadcast'/>
                    <input type='submit' onClick={() => sendAndClean(textTyped)} Value='Submit'/>
                </div>
                <div className='chats'>
                    <label className='label-chat'>System Messages:</label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                        value={text}
                    />
                </div>
            </div>
        );
    }


    return (<div>
        {renderUserContent()}
        <UsersLogged setNameToChat={nameToChat} name={name}></UsersLogged>
    </div>)

}

export default User;