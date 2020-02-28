import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  MdAddShoppingCart,
  MdFavoriteBorder,
  MdFavorite,
} from 'react-icons/md';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import { Images, Container, ImagesGroup, AddFavorite, Loading } from './styles';

export default class Home extends Component {
  state = {
    products: [],
    loading: null,
    ready: false,
  };

  componentDidMount() {
    this.setState({ loading: true, ready: false });

    this.loadProducts();

    setTimeout(() => {
      this.setState({ loading: false });

      setTimeout(() => {
        this.setState({ ready: true });
      }, 10);
    }, 1000);
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

  render() {
    const { products, loading, ready } = this.state;

    return (
      <>
        {loading ? (
          <Loading type="MutatingDots" color="#fff" height={100} width={100} />
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
        )}
      </>
    );
  }
}
