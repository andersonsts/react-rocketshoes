import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { MdShoppingCart } from 'react-icons/md';

import { formatPrice } from '../../util/format';
import { Container, Cart, DropDown } from './styles';

import logo from '../../assets/images/logo.svg';

function Header({ cartSize, cart, total, location }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart" cartSize={cartSize}>
        <div className="cart">
          <strong>Meu carrinho</strong>
          <MdShoppingCart size={36} color="#fff" />
        </div>

        {cart.length && location.pathname !== '/cart' ? (
          <DropDown>
            {cart.map(product => (
              <div>
                <img src={product.image} alt={product.title} />
                <div>
                  {product.title}
                  <p>
                    {product.amount} x <span>{product.price}</span>
                  </p>
                </div>
              </div>
            ))}
            {cartSize > 3 && <div className="more">...</div>}
            <h2>
              <span>TOTAL:</span>
              <span>{total}</span>
            </h2>
          </DropDown>
        ) : null}
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.products.length,
  cart: state.cart.products.slice(0, 3).map(product => ({
    ...product,
    price: formatPrice(product.price),
  })),
  total: formatPrice(
    state.cart.products.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
}))(withRouter(Header));
