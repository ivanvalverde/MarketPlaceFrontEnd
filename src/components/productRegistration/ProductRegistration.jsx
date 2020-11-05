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
    <section className="prodRegistration ">
      <div className="w-100 mx-auto d-sm-flex flex-sm-wrap">
        <Form.Group className="groupTitle w-100">
          <h2 className="formTitle">Insira dados do produto</h2>
        </Form.Group>
        <Form.Group
          controlId="formBasicNameProduct"
          className="groupNameProduct"
        >
          <Form.Control type="text" onChange={alteraNome} placeholder="Nome do produto" required />
        </Form.Group>
        <Form.Group
          controlId="formBasicDescription"
          className="groupDescription"
        >
          <Form.Control type="text" onChange={alteraDescricao} placeholder="Descrição" required />
        </Form.Group>
        <Form.Group controlId="formBasicImage" className="groupImage">
          <Form.Control type="text" onChange={alteraImagem} placeholder="Link da imagem" required />
        </Form.Group>
        <Form.Group controlId="formBasicPrice" className="groupPrice">
          <Form.Control type="number" onChange={alteraPreco} placeholder="Preço" required />
        </Form.Group>
        <Form.Group controlId="formBasicStock" className="groupStock">
          <Form.Control
            onChange={alteraEstoque}
            type="text"
            placeholder="Quantidade do produto"
            required
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-center w-100">
          <Button onClick={handlePress} variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </div>
    </section>
  );
};

export default ProductRegistration;
