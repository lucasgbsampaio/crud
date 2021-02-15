import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import { NEW_PRODUCT } from '../services/api';

export default function ProductModal({ show, setShow }) {
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [perishable, setPerishable] = React.useState(false);
  const [manufactureDate, setManufactureDate] = React.useState('');
  const [expirationDate, setExpirationDate] = React.useState('');
  const [error, setError] = React.useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = NEW_PRODUCT({
      name,
      price,
      perishable,
      manufactureDate,
      expirationDate,
    });
    const res = await fetch(url, options);

    if (!res.ok) {
      const json = await res.json();
      setError(json.error);
    } else {
      setShow(!show);
    }
  }

  return (
    <Modal animation={false} show={show} onHide={() => setShow(!show)}>
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
              <Form.Label>
                Data de validade {perishable && <span>*</span>}
              </Form.Label>
              <Form.Control
                type="date"
                value={expirationDate}
                disabled={perishable ? 0 : 1}
                required={perishable}
                onChange={({ target }) => setExpirationDate(target.value)}
              />
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

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Modal.Body>

      {error && (
        <Modal.Footer className="error justify-center">{error}</Modal.Footer>
      )}
    </Modal>
  );
}
