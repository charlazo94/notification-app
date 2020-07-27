import React, {useEffect, useState} from 'react';
import UsersLogged from "./usersLogged";

function User({name, chanel}) {
    const [text, setText] = useState('');
    useEffect(() => {
        console.log(name)
        console.log(chanel)
       /* chanel.subscribe('system', function(message) {
            console.log(message.data);
        });*/
    });

    function renderUserContent() {
        return (
            <div className='body-user'>
                <div className='chats'>
                    <label className='label-chat'>Chat with user:</label>
                    <textarea
                        className="form-control-2"
                        id="exampleFormControlTextarea2"
                        rows="5"
                    />
                </div>
                <div className='chats'>
                    <label className='label-chat'>System Messages:</label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                    />
                </div>
            </div>
        );
    }


    return (<div>
        {renderUserContent()}
        <UsersLogged name={name}></UsersLogged>
    </div>)

}

export default User;