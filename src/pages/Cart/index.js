import React, { Component } from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total, Loading } from './styles';

export default class Cart extends Component {
  state = {
    loading: true,
    ready: false,
  };

  componentDidMount() {
    this.temp();
  }

  temp = () => {
    setTimeout(() => {
      this.setState({ loading: false });

      setTimeout(() => {
        this.setState({ ready: true });
      }, 5);
    }, 1000);
  };

  render() {
    const { loading, ready } = this.state;

    return (
      <>
        {loading ? (
          <Loading type="MutatingDots" color="#fff" height={100} width={100} />
        ) : (
          <Container ready={ready}>
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
                    <div>
                      <button type="submit">
                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                      </button>
                      <input type="number" readOnly value={2} />
                      <button type="submit">
                        <MdAddCircleOutline size={20} color="#7159c1" />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>R$ 259,90</strong>
                  </td>
                  <td>
                    <button type="button">
                      <MdDelete size={20} color="#7159c1" />
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
        )}
      </>
    );
  }
}
