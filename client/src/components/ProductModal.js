import React from 'react';

import style from './ProductModal.module.css';

export default function ProductModal({ showModal, setShowModal }) {
  const [productName, setProductName] = React.useState('');
  const [price, setPrice] = React.useState(0);
  const [perishable, setPerishable] = React.useState(false);
  const [manufactureDate, setManufactureDate] = React.useState('');
  const [expirationDate, setExpirationDate] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleClick() {
    setShowModal(!showModal);
  }

  return (
    <div className={showModal ? `${style.modalOn}` : `${style.modalOff}`}>
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <input type="text" />
          <input type="number" />
          <input type="checkbox" />
          <input type="date" />
          <input type="date" />
        </form>

        <button onClick={handleClick}>Enviar</button>
      </div>
    </div>
  );
}
