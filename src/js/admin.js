import React, {useState, useEffect} from 'react';
import UsersLogged from "./usersLogged";

function Admin({chanel}) {
    const [text, setText] = useState('');



    function renderAdmin() {
        return (<div className='admin-body'>
            <label>Broadcast Message: </label>
            <input type='text' onChange={e => setText(e.target.value)} name='broadcast'/>
            <input type='submit' onClick={() => chanel.publish('system', text)} Value='Submit'/>

        </div>);
    }

    return (<div>
        {renderAdmin()}
        <UsersLogged name='Admin'></UsersLogged>
    </div>);

}

export default Admin;