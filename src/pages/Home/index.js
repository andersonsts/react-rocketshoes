import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  MdAddShoppingCart,
  MdFavoriteBorder,
  MdFavorite,
} from 'react-icons/md';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

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

  handleAddProduct = product => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  render() {
    const { products, loading, ready } = this.state;

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
                <Images
                  showStatus={false}
                  showThumbs={false}
                  showArrows={false}
                  autoPlay
                  infiniteLoop
                  stopOnHover
                  interval={
                    (Math.floor(Math.random() * (11 - 1 + 3)) + 3) * 1000
                  }
                  transitionTime={
                    Math.floor(Math.random() * (11 - 1 + 5) + 5) * 100
                  }
                  selectedItem={Math.floor(Math.random() * (3 - 1 + 1)) + 1}
                >
                  {product.image.map(img => (
                    <div key={img}>
                      <figure>
                        <img src={img} alt="Imagem" />
                      </figure>
                    </div>
                  ))}
                </Images>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>

                <button
                  type="button"
                  className="add"
                  onClick={() => this.handleAddProduct(product)}
                >
                  <div>
                    <MdAddShoppingCart />
                    <span>3</span>
                  </div>
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

export default connect()(Home);
