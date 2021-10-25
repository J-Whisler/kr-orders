import React from "react";
import "./OrderCard.scss";

const OrderCard = ({ order }) => {
  return (
    <div className="ordercard__container">
      <h2 className="">{order.containerType}</h2>
    </div>
  );
};

export default OrderCard;
