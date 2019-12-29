import React from 'react';

import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary.js';


const OrderForm = props => (
  <Row>
    <Col xs={12} >
      <OrderSummary tripCost={props.tripCost} options={props.options} />
      {console.log(OrderSummary)}
    </Col>
  </Row>
);
OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};



export default OrderForm;
