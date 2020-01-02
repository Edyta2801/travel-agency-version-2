import React from 'react';
import pricing from '../../../data/pricing.json';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import OrderOption from '../OrderOption/OrderOption.js';

const OrderForm = props => (
  <Row>
    {pricing.map(option => (
      <Col md={4} key={option.id}>
        <OrderOption {...option} />
      </Col>
    ))}
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
