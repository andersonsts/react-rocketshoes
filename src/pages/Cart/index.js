import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
  MdRemoveShoppingCart,
} from 'react-icons/md';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import { Container, ProductTable, Total, Loading, EmptyCart } from './styles';

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
    const { cart, total, removeFromCart, updateAmountRequest } = this.props;

    function increment(product) {
      updateAmountRequest(product.id, product.amount + 1);
    }

    function decrement(product) {
      updateAmountRequest(product.id, product.amount - 1);
    }

    return (
      <>
        {loading ? (
          <Loading type="MutatingDots" color="#fff" height={100} width={100} />
        ) : (
          <Container ready={ready}>
            {cart.length === 0 ? (
              <EmptyCart>
                <MdRemoveShoppingCart />
                <p>Carrinho vazio. </p>
              </EmptyCart>
            ) : (
              <>
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
                            <button
                              type="button"
                              onClick={() => decrement(product)}
                            >
                              <MdRemoveCircleOutline
                                size={20}
                                color="#7159c1"
                              />
                            </button>
                            <input
                              type="number"
                              readOnly
                              value={product.amount}
                            />
                            <button
                              type="button"
                              onClick={() => increment(product)}
                            >
                              <MdAddCircleOutline size={20} color="#7159c1" />
                            </button>
                          </div>
                        </td>
                        <td>
                          <strong>{product.subtotal}</strong>
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
                    <strong>{total}</strong>
                  </Total>
                </footer>
              </>
            )}
          </Container>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
