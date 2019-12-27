import React from 'react';
import styles from '../OrderSummary/OrderSummary.scss';
import PropTypes from 'prop-types';


const OrderSummary = props => (
  <h2 className={styles.component}>
    Total: <strong>{props.tripCost}{props.options}</strong>
  </h2>
);
OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};



export default OrderSummary;

