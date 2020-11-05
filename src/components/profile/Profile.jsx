import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import UserContext from '../../userContext';

const Profile = () => {

    const { user } = useContext(UserContext);
    const [nome, setNome] = React.useState("");
    const [telefone, setTelefone] = React.useState("");
    const [imagem, setImagem] = React.useState("");
    const [endereco, setEndereco] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [cpf, setCpf] = React.useState("");

    const alteraNome = (event) => {
        setNome(event.target.value);
    }

    const alteraTelefone = (event) => {
        setTelefone(event.target.value);
    }

    const alteraEndereco = (event) => {
        setEndereco(event.target.value);
    }

    const alteraImagem = (event) => {
        setImagem(event.target.value);
    }

    const alteraCpf = (event) => {
        setCpf(event.target.value);
    }

    const alteraSenha = (event) => {
        setSenha(event.target.value);
    }

    const handlePress = () => {


    }

    return (
        <section>

            <img></img>
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
                            placeholder="Nome do usuário"
                            value={user.name}
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
                            placeholder="Telefone"
                            value={user.telefone}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicImage" className="groupImage">
                        <Form.Control
                            onChange={alteraImagem}
                            className="border border-dark"
                            type="text"
                            placeholder="Link da imagem"
                            value={user.foto}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicAddress" className="groupAddress">
                        <Form.Control
                            onChange={alteraEndereco}
                            className="border border-dark"
                            type="text"
                            placeholder="Endereço"
                            value={user.endereco}
                            required
                        />
                    </Form.Group>


                    <Form.Group controlId="formBasicCpf" className="groupCpf">
                        <Form.Control
                            onChange={alteraCpf}
                            className="border border-dark"
                            type="text"
                            placeholder="Preço"
                            value={user.cpf}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicStock" className="groupSenha">
                        <Form.Control
                            onChange={alteraSenha}
                            type="password"
                            className="border border-dark"
                            placeholder="Senha"
                            value={user.senha}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-center w-100">
                        <Button onClick={handlePress} variant="primary" type="submit">
                            Enviar
            </Button>
                    </Form.Group>
                </Form>

            </div>
        </section>
    )
}

export default Profile;
