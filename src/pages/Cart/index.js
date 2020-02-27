import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ims=120x"
                alt=""
              />
            </td>
            <td>
              <strong>Tênis muito massa</strong>
              <span>R$ 129,90</span>
            </td>
            <td>
              <button type="submit">
                <MdRemoveCircleOutline size={20} color="#7159c1" />
              </button>
              <input type="number" readOnly value={2} />
              <button type="submit">
                <MdAddCircleOutline size={20} color="#7159c1" />
              </button>
            </td>
            <td>
              <strong>R$ 259,90</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete sizse={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$ 1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}
