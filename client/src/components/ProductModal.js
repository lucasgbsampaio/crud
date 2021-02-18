import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import {
  newProductRequested,
  hideModal,
  updateProductRequested,
} from '../actions/products';

export default function ProductModal() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.products.showModal);

  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [perishable, setPerishable] = React.useState(false);
  const [manufactureDate, setManufactureDate] = React.useState('');
  const [expirationDate, setExpirationDate] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    if (showModal.type === 'NEW') {
      dispatch(
        newProductRequested({
          name,
          price,
          perishable,
          manufactureDate,
          expirationDate,
        })
      );
    } else {
      dispatch(
        updateProductRequested(
          {
            name,
            price,
            perishable,
            manufactureDate,
            expirationDate,
          },
          showModal.productId
        )
      );
    }
    dispatch(hideModal());

    // Resetar valores dos campos após submit
    setName('');
    setPrice('');
    setPerishable(false);
    setExpirationDate('');
    setManufactureDate('');
  }

  // Limpar valor de expirationDate se perishable for FALSE
  React.useEffect(() => {
    if (!perishable && expirationDate) {
      setExpirationDate('');
    }
  }, [expirationDate, perishable]);

  return (
    <Modal
      animation={false}
      show={showModal.status}
      onHide={() => dispatch(hideModal())}
    >
      <Modal.Header closeButton>
        <Modal.Title>Registro de Produto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridText">
              <Form.Label>Nome *</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={({ target }) => setName(target.value)}
                required
                placeholder="Nome do produto"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridNumber">
              <Form.Label>Preço (R$) *</Form.Label>
              <Form.Control
                type="number"
                value={price}
                onChange={({ target }) => setPrice(target.value)}
                required
                placeholder="Preço"
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridManufactureDate">
              <Form.Label>Data de fabricação *</Form.Label>
              <Form.Control
                type="date"
                value={manufactureDate}
                onChange={({ target }) => setManufactureDate(target.value)}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridExpirationDate">
              {perishable && (
                <>
                  <Form.Label>
                    Data de validade <span>*</span>
                  </Form.Label>
                  <Form.Control
                    type="date"
                    value={expirationDate}
                    required
                    onChange={({ target }) => setExpirationDate(target.value)}
                  />
                </>
              )}
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              checked={perishable}
              onChange={({ target }) => setPerishable(target.checked)}
              label="Perecível"
            />
          </Form.Group>

          <Button variant="info" type="submit">
            Enviar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
