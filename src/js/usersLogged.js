import React, {useEffect, useState} from 'react';


function UsersLogged({name, setNameToChat}) {
    const [newList, setList] = useState(localStorage.getItem('users') || ',');
    const [list, setListinix] = useState([]);

    useEffect(() => {
        if (name !== null && name !== 'Admin') {
            const oldArray = newList.split(',')

            if (!oldArray.includes(name)) {
                const newArray = [...oldArray, name];

                localStorage.setItem('users', newArray.toString());
                const index = newArray.indexOf(name);
                if (index > -1) {
                    newArray.splice(index, 1);

                }
                setListinix(newArray)
            } else {
                const ind = oldArray.indexOf(name);
                if (ind > -1) {
                    oldArray.splice(ind, 1);
                }
                setListinix(oldArray)
            }


        }
    }, []);

    function nameToChat(name) {
        setNameToChat(name);
    }

    function renderUsersLogged(user) {
        return (<div onClick={() => nameToChat(user)}>
            <label>{user}</label>
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