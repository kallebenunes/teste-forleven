import React, { useEffect, useState } from 'react'
import api from 'axios'

import Alternate from '../../components/Alternate'
import StyleBonus from './style';

const Bonus = () => {

    let [users, setUsers] = useState([1,2,3,4]);


    const loadUsers = async () => {
        const res = await api.get('https://jsonplaceholder.typicode.com/users');
        const {data} = await res;
        setUsers(data)
    }
    
    useEffect(() => {
        loadUsers()
        
    },[])

    useEffect(() => {},
    [users])

    return (
        <>
            <StyleBonus className='users'>
            
                {users.map(( {name, email}, index) => {
                return <div key={index}>
                            <p>Nome : {name}</p>
                            <p>Email: {email}</p>
                        </div>
                })}

            </StyleBonus>
            <Alternate/>
        </>
    )
}

export default Bonus
