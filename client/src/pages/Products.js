import React from 'react';

import ProductModal from '../components/ProductModal';

export default function Products() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <main>
      <button type="button" onClick={() => setShowModal(!showModal)}>
        NOVO PRODUTO
      </button>

      <ProductModal showModal={showModal} setShowModal={setShowModal} />
    </main>
  );
}
