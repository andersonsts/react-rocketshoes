import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total, Loading } from './styles';

class Cart extends Component {
  state = {
    loading: true,
    ready: false,
  };

  componentDidMount() {
    this.loadingTime();
  }

  loadingTime = () => {
    setTimeout(() => {
      this.setState({ loading: false });

      setTimeout(() => {
        this.setState({ ready: true });
      }, 5);
    }, 1000);
  };

  render() {
    const { loading, ready } = this.state;
    const { cart, removeFromCart } = this.props;

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
                {cart.map(product => (
                  <tr>
                    <td>
                      <figure>
                        <img src={product.image[0]} alt={product.title} />
                      </figure>
                    </td>
                    <td>
                      <strong>{product.title}</strong>
                      <span>{product.priceFormatted}</span>
                    </td>
                    <td>
                      <div>
                        <button type="button">
                          <MdRemoveCircleOutline size={20} color="#7159c1" />
                        </button>
                        <input type="number" readOnly value={product.amount} />
                        <button type="button">
                          <MdAddCircleOutline size={20} color="#7159c1" />
                        </button>
                      </div>
                    </td>
                    <td>
                      <strong>R$ 259,90</strong>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => removeFromCart(product.id)}
                      >
                        <MdDelete size={20} color="#7159c1" />
                      </button>
                    </td>
                  </tr>
                ))}
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

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
