import React from "react";
import "../../assets/css/productRegistration.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ProductRegistration = () => {
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
              className="border border-dark"
              type="text"
              placeholder="Descrição"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicImage" className="groupImage">
            <Form.Control
              className="border border-dark"
              type="text"
              placeholder="Link da imagem"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPrice" className="groupPrice">
            <Form.Control
              className="border border-dark"
              type="number"
              placeholder="Preço"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicStock" className="groupStock">
            <Form.Control
              type="text"
              className="border border-dark"
              placeholder="Quantidade do produto"
              required
            />
          </Form.Group>
          <Form.Group className="d-flex justify-content-center w-100">
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form.Group>
        </Form>
    </section>
  );
};

export default ProductRegistration;
