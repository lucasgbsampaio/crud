import React from 'react';
import Button from 'react-bootstrap/Button';

import ProductModal from '../components/ProductModal';

export default function Products() {
  const [show, setShow] = React.useState(false);

  return (
    <main>
      <Button variant="primary" onClick={() => setShow(!show)}>
        Lançamento
      </Button>

      <ProductModal show={show} setShow={setShow} />
    </main>
  );
}
