import React, { useState } from 'react';
import UserContext from './userContext';

const UserProvider = ({ children }) => {

    const [user, setUser] = useState({ name: '', auth: false });


    const login = (name) => {
        setUser((user) => ({
            name: name,
            auth: true,
        }));
    };


    const logout = () => {
        setUser((user) => ({
            name: '',
            auth: false,
        }));
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;