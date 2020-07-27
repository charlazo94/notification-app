import React, {useState, useEffect} from 'react';
import UsersLogged from "./usersLogged";

function Admin({}) {
    const [text, setText] = useState('');
    const [channel, setChannel] = useState(undefined);

    useEffect(() => {
            const channel = window.Ably.channels.get('Default')

            setChannel(channel);
        },
        [])

    function sendAndClean(text) {
        channel.publish('system', text);
        setText('');
    }

    function renderAdmin() {
        return (<div className='admin-body'>
            <label>Broadcast Message: </label>
            <input type='text' value={text} onChange={e => setText(e.target.value)} name='broadcast'/>
            <input type='submit' onClick={() => sendAndClean(text) } Value='Submit'/>

        </div>);
    }

    return (<div>
        {renderAdmin()}
        {<UsersLogged  name='Admin' setNameToChat={() => console.log()}/>}
    </div>);

}

export default Admin;