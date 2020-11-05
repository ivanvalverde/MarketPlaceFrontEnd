import React, { useState } from 'react';
import UserContext from './userContext';

const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        name: '',
        auth: false,
        id: '',
        clien: '',
        email: '',
        telefone: '',
        endereco: '',
        cpf: '',
        foto: '',
        razaoSocial: '',
        cnpj: '',
    });


    const login = (name,id,clien,email,telefone,endereco,cpf,foto,razaoSocial,cnpj) => {
        setUser((user) => ({
            name: name,
            auth: true,
            id: id,
            clien: clien,
            email: email,
            telefone: telefone,
            endereco: endereco,
            cpf: cpf,
            foto: foto,
            razaoSocial: razaoSocial,
            cnpj: cnpj,
        }));
    };


    const logout = () => {
        setUser((user) => ({
            name: '',
            auth: false,
            id: '',
            clien: '',
            email: '',
            telefone: '',
            endereco: '',
            cpf: '',
            foto: '',
            razaoSocial: '',
            cnpj: '',
        }));
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;