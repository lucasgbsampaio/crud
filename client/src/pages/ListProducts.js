import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';

import { getProductsRequested, showNewModal } from '../actions/products';

import ProductModal from '../components/ProductModal';
import ProductItem from '../components/ProductItem';

import style from './styles/ListProducts.module.css';

export default function ListProducts() {
  const [page, setPage] = React.useState(1);
  const [optionSort, setOptionSort] = React.useState('name');

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const pages = useSelector((state) => state.products.pages);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  React.useEffect(() => {
    dispatch(getProductsRequested(page, optionSort));
  }, [dispatch, page, optionSort]);

  React.useEffect(() => {
    if (error) alert(`Error: ${error}`);
  }, [error]);

  return (
    <main className={style.container}>
      <section className={style.options}>
        <Button
          variant="info"
          size="lg"
          onClick={() => dispatch(showNewModal())}
        >
          Lançamento
        </Button>

        <Form.Group controlId="selectOptions">
          <Form.Label>Ordenar por: </Form.Label>
          <Form.Control
            as="select"
            custom
            value={optionSort}
            onChange={({ target }) => setOptionSort(target.value)}
          >
            <option value="name">Nome [A-Z]</option>
            <option value="-name">Nome [Z-A]</option>
            <option value="-price">Preço [1, -1]</option>
            <option value="price">Preço [-1, 1]</option>
            <option value="-perishable">Perecível [1, -1]</option>
            <option value="perishable">Percível [-1, 1]</option>
            <option value="-manufacture_date">
              Data de fabricação [1, -1]
            </option>
            <option value="manufacture_date">Data de fabricação [-1, 1]</option>
            <option value="-expiration_date">Data de validade [1, -1]</option>
            <option value="expiration_date">Data de validade [-1, 1]</option>
          </Form.Control>
        </Form.Group>
      </section>

      {loading ? (
        <div className={style.centerSpinner}>
          <Spinner animation="grow" variant="info" />
        </div>
      ) : (
        <>
          <Table responsive="md" striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Preço (R$)</th>
                <th>Perecível</th>
                <th>Data de fabricação</th>
                <th>Data de validade</th>
                <th>Editar</th>
                <th>Deletar</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product, index) => {
                return (
                  <ProductItem
                    index={index + 1}
                    key={product._id}
                    product={product}
                  />
                );
              })}
            </tbody>
          </Table>
        </>
      )}

      <div id="react-paginate">
        <ReactPaginate
          pageCount={pages}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => setPage(data.selected + 1)}
          previousLabel={'Antes'}
          nextLabel={'Próximo'}
          breakLabel={'...'}
          activeClassName={'active'}
        />
      </div>

      <ProductModal />
    </main>
  );
}
