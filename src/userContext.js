import { createContext } from 'react';

const UserContext = createContext({ name: '', auth: false });

export default UserContext;