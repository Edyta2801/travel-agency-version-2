import React from 'react';
import styles from '../OrderSummary/OrderSummary.scss';
import PropTypes from 'prop-types';

import { calculateTotal } from '../../../utils/calculateTotal.js';
import { formatPrice } from '../../../utils/formatPrice.js';


const OrderSummary = props => (
  <h2 className={styles.component}>
    Total: <strong>${calculateTotal(formatPrice(props.tripCost), props.options)}</strong>
    {console.log(calculateTotal(props.tripCost, props.options))}
    {console.log(typeof(calculateTotal(props.tripCost, props.options)))}
  </h2>
);


OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};


export default OrderSummary;

