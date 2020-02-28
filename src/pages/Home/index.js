import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  MdAddShoppingCart,
  MdFavoriteBorder,
  MdFavorite,
} from 'react-icons/md';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import { Images, Container, ImagesGroup, AddFavorite } from './styles';

export default class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.loadProducts();
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
    const response = await api.get(`products/${idP}`);

    const product = response.data;

    const { favorite, title, image, price, id } = product;

    await api.put(`products/${id}`, {
      id,
      title,
      favorite: !favorite,
      image,
      price,
    });

    this.loadProducts();
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        {products.map(product => (
          <ImagesGroup key={product.id}>
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
            >
              {product.image.map(img => (
                <div>
                  <figure>
                    <img src={img} alt="Imagem" />
                  </figure>
                </div>
              ))}
            </Images>
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button type="button" className="add">
              <div>
                <MdAddShoppingCart />
                <span>3</span>
              </div>
              <strong>ADICIONAR AO CARRINHO</strong>
            </button>
          </ImagesGroup>
        ))}
      </Container>
    );
  }
}
