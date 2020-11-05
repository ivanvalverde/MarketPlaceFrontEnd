import { createContext } from 'react';

const UserContext = createContext({
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

export default UserContext;