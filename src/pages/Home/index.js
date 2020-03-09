import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  MdAddShoppingCart,
  MdFavoriteBorder,
  MdFavorite,
} from 'react-icons/md';
import Loader from 'react-loader-spinner';

import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import Loading from '../../components/GridPlaceholder';
import { Images, Container, ImagesGroup, AddFavorite } from './styles';

class Home extends Component {
  state = {
    products: [],
    loading: null,
    ready: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    this.loadProducts();

    setTimeout(() => {
      this.setState({ loading: false, ready: true });

      setTimeout(() => {
        this.setState({ ready: true });
      }, 0);
    }, 500);
  }

  async loadProducts() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
      loadingProduct: false,
    }));

    this.setState({ products: data });
  }

  async handleAddFavorite(idP) {
    const { data } = await api.get(`products/${idP}`);

    const { favorite, title, image, price, id } = data;

    await api.put(`products/${id}`, {
      id,
      title,
      favorite: !favorite,
      image,
      price,
    });

    this.loadProducts();
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products, loading, ready } = this.state;
    const { amount } = this.props;

    return (
      <>
        {loading ? (
          <Loading repeatCount={6} />
        ) : (
          <Container>
            {products.map(product => (
              <ImagesGroup key={product.id} ready={ready}>
                <AddFavorite
                  type="button"
                  onClick={() => this.handleAddFavorite(product.id)}
                >
                  <div>
                    {product.favorite ? (
                      <MdFavorite color="red" />
                    ) : (
                      <MdFavoriteBorder />
                    )}
                  </div>
                </AddFavorite>
                <Images>
                  <div>
                    <figure>
                      <img src={product.image} alt="Imagem" />
                    </figure>
                  </div>
                </Images>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>

                <button
                  type="button"
                  className="add"
                  onClick={() => this.handleAddProduct(product.id)}
                >
                  {product.loadingProduct ? (
                    <Loader
                      type="Puff"
                      color="#00BFFF"
                      height={20}
                      width={20}
                      timeout={3000} // 3 secs
                    />
                  ) : (
                    <div>
                      <MdAddShoppingCart size={16} color="#fff" />
                      {amount[product.id] || 0}
                    </div>
                  )}
                  <strong>ADICIONAR AO CARRINHO</strong>
                </button>
              </ImagesGroup>
            ))}
          </Container>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
