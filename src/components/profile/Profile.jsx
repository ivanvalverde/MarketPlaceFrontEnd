import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import UserContext from '../../userContext';
import '../../assets/css/profile.css';
import putUser from '../../api/putUser';
import {useHistory} from 'react-router-dom';

const Profile = () => {

    const history = useHistory();
    const { user, login } = useContext(UserContext);
    const [nome, setNome] = React.useState(user.name);
    const [telefone, setTelefone] = React.useState(user.telefone);
    const [imagem, setImagem] = React.useState(user.foto);
    const [endereco, setEndereco] = React.useState(user.endereco);
    const [cpf, setCpf] = React.useState(user.cpf);
    const [cnpj, setCnpj] = React.useState(user.cnpj);
    const [razaoSocial, setRazaoSocial] = React.useState(user.razaoSocial);
    const [bodyReq, setBodyReq] = React.useState({
        nome: user.name,
        telefone: user.telefone,
        foto: user.foto,
        endereco: user.endereco,
        cpf: user.cpf,
        cnpj: user.cnpj,
        razaoSocial: user.razaoSocial,
    });
    const [display, setDisplay] = React.useState(true);

    const verifica = () => {
        if (user.clien === "clien") {

            setBodyReq({
                nome: nome,
                telefone: telefone,
                foto: imagem,
                endereco: endereco,
                cpf: cpf,
            })
        } else {
            setBodyReq({
                nome: nome,
                telefone: telefone,
                foto: imagem,
                endereco: endereco,
                cnpj: cnpj,
                razaoSocial: razaoSocial,
            })
        }
    }

    const alteraNome = (event) => {
        setNome(event.target.value);
        verifica();
    }

    const alteraTelefone = (event) => {
        setTelefone(event.target.value);
        verifica();
    }

    const alteraEndereco = (event) => {
        setEndereco(event.target.value);
        verifica();
    }

    const alteraImagem = (event) => {
        setImagem(event.target.value);
        verifica();
    }

    const alteraCpf = (event) => {
        setCpf(event.target.value);
        verifica();
    }

    const alteraCnpj = (event) => {
        setCnpj(event.target.value);
        verifica();
    }

    const alteraRazaoSocial = (event) => {
        setRazaoSocial(event.target.value);
        verifica();
    }

    const handleConfirm = (event) => {
        event.preventDefault();
        verifica();
        setDisplay(!display);
    }

    const handlePress = (event) => {
        event.preventDefault();
        verifica();

        if (user.clien === "cliente") {
            login(bodyReq.nome, user.id, user.clien, user.email, bodyReq.telefone, bodyReq.endereco, bodyReq.cpf, bodyReq.foto);
        } else {
            login(bodyReq.nome, user.id, user.clien, user.email, bodyReq.telefone, bodyReq.endereco, '', bodyReq.foto,
                bodyReq.razaoSocial, bodyReq.cnpj);
        }

        putUser(bodyReq, user.clien, user.id).then((res) => {
            history.push('/sucesso')
        })
    }

    return (
        <section className="profileSection">

            <img src={user.foto} className="fotoProfile"></img>
            <div className="profile bg-secondary ">
                <Form className="d-sm-flex flex-sm-wrap formRegister ">
                    <Form.Group className="groupTitle w-100 rounded">
                        <h2 className="formTitle text-center font-weight-bold">
                            Atualize seus dados
            </h2>
                    </Form.Group>
                    <Form.Group
                        controlId="formBasicName"
                        className="groupNameUser"
                    >
                        <Form.Control
                            onChange={alteraNome}
                            className="border border-dark"
                            type="text"
                            defaultValue={user.name}
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        controlId="formBasicPhone"
                        className="groupPhone"
                    >
                        <Form.Control
                            onChange={alteraTelefone}
                            className="border border-dark"
                            type="text"
                            defaultValue={user.telefone}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicImage" className="groupImage">
                        <Form.Control
                            onChange={alteraImagem}
                            className="border border-dark"
                            type="text"
                            defaultValue={user.foto}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicAddress" className="groupAddress">
                        <Form.Control
                            onChange={alteraEndereco}
                            className="border border-dark"
                            type="text"
                            defaultValue={user.endereco}
                            required
                        />
                    </Form.Group>


                    {user.clien === "cliente" ? <Form.Group controlId="formBasicCpf" className="groupCpf">
                        <Form.Control
                            onChange={alteraCpf}
                            className="border border-dark"
                            type="text"
                            defaultValue={user.cpf}
                            required
                        />
                    </Form.Group> : <Form.Group controlId="formBasicCnpj" className="groupCnpj">
                            <Form.Control
                                onChange={alteraCnpj}
                                className="border border-dark"
                                type="text"
                                defaultValue={user.cnpj}
                                required
                            />
                        </Form.Group>}

                    {user.clien === "cliente" ? <></> : <Form.Group controlId="formBasicRazaoSocial" className="groupRazaoSocial">
                        <Form.Control
                            onChange={alteraRazaoSocial}
                            className="border border-dark"
                            type="text"
                            defaultValue={user.razaoSocial}
                            required
                        />
                    </Form.Group>}

                    {display?<Form.Group className="d-flex justify-content-center w-100">
                        <Button onClick={handleConfirm} variant="primary" type="submit">
                            Confirmar
                        </Button>
                    </Form.Group>:

                    <Form.Group className="d-flex justify-content-center w-100">
                        <Button onClick={handlePress} className="sendButton" variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form.Group>}
                </Form>

            </div>
        </section>
    )
}

export default Profile;
