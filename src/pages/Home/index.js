import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <figure>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/04/E74-0492-304/E74-0492-304_zoom2.jpg?ims=326x"
            alt="Tênis"
          />
        </figure>

        <strong>Tênis de caminhada</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 4
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <figure>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/04/E74-0492-304/E74-0492-304_zoom2.jpg?ims=326x"
            alt="Tênis"
          />
        </figure>

        <strong>Tênis de caminhada</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 4
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <figure>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/04/E74-0492-304/E74-0492-304_zoom2.jpg?ims=326x"
            alt="Tênis"
          />
        </figure>

        <strong>Tênis de caminhada</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 4
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <figure>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/04/E74-0492-304/E74-0492-304_zoom2.jpg?ims=326x"
            alt="Tênis"
          />
        </figure>

        <strong>Tênis de caminhada</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 4
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <figure>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/04/E74-0492-304/E74-0492-304_zoom2.jpg?ims=326x"
            alt="Tênis"
          />
        </figure>

        <strong>Tênis de caminhada</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 4
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <figure>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/04/E74-0492-304/E74-0492-304_zoom2.jpg?ims=326x"
            alt="Tênis"
          />
        </figure>

        <strong>Tênis de caminhada</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 4
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
