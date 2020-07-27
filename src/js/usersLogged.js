import React from 'react';

const list = [{'name': 'carlos'},
    {name: 'strudel'}];

function UsersLogged({name}) {

    function renderUsersLogged(user) {
        return (<div>
            <label>{user.name}</label>
        </div>);
    }



        return (<div className='users-logged'>
            <label>{name} (You)</label>
            {list.map(user => {
                return renderUsersLogged(user);
            })}
        </div>);

}

export default UsersLogged;