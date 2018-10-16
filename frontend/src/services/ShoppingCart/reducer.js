import { PRODUCTS } from '../../mock-data';
import { SHOPPING_CART_ADD_PRODUCT } from './actions';

const initialState = {
  items: [
        { product: PRODUCTS[0], count: 100 },
        { product: PRODUCTS[1], count: 200 },
      ],
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) { // here it checks the `type` of acction
      case SHOPPING_CART_ADD_PRODUCT: { // and reacts only to specified ones
        const { product } = action.payload;

        return {
          ...state,
          items: [
             ...state.items,
              {product, count: 1 },
          ]
        };
      }

      default:
        return state;
    }
};

// -- selectors --

export const getItems = (state) => state.items;
