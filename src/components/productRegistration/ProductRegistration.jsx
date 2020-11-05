import React, { useContext } from "react";
import "../../assets/css/productRegistration.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Post from '../../api/post';
import UserContext from '../../userContext';

const ProductRegistration = () => {

  const { user } = useContext(UserContext);
  const [nome, setNome] = React.useState("");
  const [descricao, setDescricao] = React.useState("");
  const [imagem, setImagem] = React.useState("");
  const [preco, setPreco] = React.useState(0);
  const [estoque, setEstoque] = React.useState(0);

  const alteraNome = (event) => {
    setNome(event.target.value);
  }

  const alteraDescricao = (event) => {
    setDescricao(event.target.value);
  }

  const alteraImagem = (event) => {
    setImagem(event.target.value);
  }

  const alteraPreco = (event) => {
    setPreco(event.target.value);
  }

  const alteraEstoque = (event) => {
    setEstoque(event.target.value);
  }

  const handlePress = (event) => {
    event.preventDefault();
    const body = {
      fornecedor: user.id,
      nome: nome,
      descricao: descricao,
      preco: preco,
      foto: imagem,
      estoque: estoque,
      
    }

    Post(body, "produto").then((res) => {
      console.log(res);
    })

  }

  return (
    <section className="prodRegistration bg-secondary ">
        <Form className="d-sm-flex flex-sm-wrap formRegister ">
          <Form.Group className="groupTitle w-100 rounded">
            <h2 className="formTitle text-center font-weight-bold">
              Insira dados do produto
            </h2>
          </Form.Group>
          <Form.Group
            controlId="formBasicNameProduct"
            className="groupNameProduct"
          >
            <Form.Control
              onChange={alteraNome}
              className="border border-dark"
              type="text"
              placeholder="Nome do produto"
              required
            />
          </Form.Group>
          <Form.Group
            controlId="formBasicDescription"
            className="groupDescription"
          >
            <Form.Control
              onChange={alteraDescricao}
              className="border border-dark"
              type="text"
              placeholder="Descrição"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicImage" className="groupImage">
            <Form.Control
              onChange={alteraImagem}
              className="border border-dark"
              type="text"
              placeholder="Link da imagem"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPrice" className="groupPrice">
            <Form.Control
              onChange={alteraPreco}
              className="border border-dark"
              type="number"
              placeholder="Preço"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicStock" className="groupStock">
            <Form.Control
              onChange={alteraEstoque}
              type="text"
              className="border border-dark"
              placeholder="Quantidade do produto"
              required
            />
          </Form.Group>
          <Form.Group className="d-flex justify-content-center w-100">
            <Button onClick={handlePress} variant="primary" type="submit">
              Enviar
            </Button>
          </Form.Group>
        </Form>

    </section>
  );
};

export default ProductRegistration;
