import React, { useContext } from 'react';
import UserContext from '../../userContext';
import { useHistory } from "react-router-dom";
import '../../assets/css/auth.css';
import { Dropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import getCompra from '../../api/getCompra';

const Auth = () => {

    const { user, logout } = useContext(UserContext);
    const history = useHistory();
    const [compras, setCompras] = React.useState("")
    

    const deslogando = () => {
        logout();
        history.push("/");
    }

    React.useEffect(() => {
        getCompra(user.id).then((res)=>{
            setCompras(res.results.length)
        })
        
    }, []);

    return (
        <div className="d-flex authDiv mr-4">

            <p className="authText mr-2">Olá {user.name}!</p>

            <Dropdown className="authButton">
                <Dropdown.Toggle id="dropdown-basic">
                    Ações
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item><Link to="/profile" className="profile">Perfil</Link></Dropdown.Item>
                    {user.clien === "cliente" ? <Dropdown.Item>Compras: {compras}</Dropdown.Item> : <></>}
                    <Dropdown.Item onClick={deslogando}>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </div>
    )
}

export default Auth;
