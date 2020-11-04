import React from "react";
import "../../assets/css/productRegistration.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ProductRegistration = () => {
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
          <Form.Control type="text" placeholder="Nome do produto" required />
        </Form.Group>
        <Form.Group
          controlId="formBasicDescription"
          className="groupDescription"
        >
          <Form.Control type="text" placeholder="Descrição" required />
        </Form.Group>
        <Form.Group controlId="formBasicImage" className="groupImage">
          <Form.Control type="text" placeholder="Link da imagem" required />
        </Form.Group>
        <Form.Group controlId="formBasicPrice" className="groupPrice">
          <Form.Control type="number" placeholder="Preço" required />
        </Form.Group>
        <Form.Group controlId="formBasicStock" className="groupStock">
          <Form.Control
            type="text"
            placeholder="Quantidade do produto"
            required
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-center w-100">
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </div>
    </section>
  );
};

export default ProductRegistration;
