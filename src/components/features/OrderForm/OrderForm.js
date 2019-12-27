import React from 'react';
import OrderSummary from '../CountrySummary/CountrySummary.js';
import { Row, Col } from 'react-flexbox-grid';

const OrderForm = () => (
  <Row>
    <Col xs={12} >
      <OrderSummary />
    </Col>
  </Row>
);



export default OrderForm;
