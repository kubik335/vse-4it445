import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addProductToCart } from '../../services/ShoppingCart/actions';

import { Button } from '../atoms/Button';
import { FontIcon } from '../atoms/FontIcon';

export class AddProductToCartButtonRaw extends Component {
  render() {
    const { product, addProductToCart } = this.props;

    return (
      <Button
        onClick={() => addProductToCart && addProductToCart(product)}
        variant="success"
      >
        <FontIcon icon="cart-arrow-down" /> Add to cart
      </Button>
    );
  }
}

// reads state (from reducer)
const mapStateToProps = state => ({});

// actions
const mapDispatchToProps = {
  addProductToCart,
};

export const AddProductToCartButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddProductToCartButtonRaw);
