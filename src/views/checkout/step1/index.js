import React from 'react';
import BasketItem from 'components/basket/BasketItem';
// import { CHECKOUT_STEP_2 } from 'constants/routes';
import { displayMoney, displayActionMessage } from 'helpers/utils';
import Pagination from '../components/Pagination';


import withAuth from '../hoc/withAuth';

const OrderSummary = ({
  basket, subtotal, dispatch, history
}) => {
  const onClickPrevious = () => history.push('/');
  const onClickNext = () => displayActionMessage('Work In Progress!', 'error');

  return (
    <div className="checkout">
      <div className="checkout-step-1">
        <h3 className="text-center">Order Summary</h3>
        <span className="d-block text-center">Review items in your basket.</span>
        <br/>
        {basket.map(product => (
          <BasketItem
              basket={basket}
              dispatch={dispatch}
              key={product.id}
              product={product}
          />
        ))}
        <br/>
        <div className="basket-total text-right">
          <p className="basket-total-title">Subtotal:</p>
          <h2 className="basket-total-amount">{displayMoney(subtotal)}</h2>
        </div>
        <br/>
        <Pagination
            disabledNext={false}
            history={history}
            onClickNext={onClickNext}
            onClickPrevious={onClickPrevious}
            previousLabel="Continue Shopping"

        />
      </div>
    </div>
  );
};

export default withAuth(OrderSummary);
