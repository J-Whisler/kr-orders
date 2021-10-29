import React from "react";
import "./CurrentOrderCard.scss";

const CurrentOrderCard = ({ order }) => {
  const sqlDueDate = order.dueDate;
  let sqlDueDateSplit = sqlDueDate.split(/[- :]/);
  const sqlDueDateMonth = sqlDueDateSplit[1];
  const sqlDueDateDay = sqlDueDateSplit[2].substring(0, 2);
  const sqlDueDateYear = sqlDueDateSplit[0];
  const dueDate = `${sqlDueDateMonth}/${sqlDueDateDay}/${sqlDueDateYear}`;

  return (
    <div className="currentOrderCard">
      <div className="currentOrderCard__info">
        <div className="currentOrderCard__info1">
          <h5>Description:</h5>
          <h4>
            <span className="currentOrderCard__info1NumOfItems">
              {order.numberOfItems}
            </span>{" "}
            <span className="currentOrderCard__info1ContainerType">
              {order.containerType}
            </span>{" "}
            <span className="currentOrderCard__info1MaterialType">
              {order.materialType}
            </span>
          </h4>
        </div>
        <div className="currentOrderCard__infoDivider"></div>
        <div className="currentOrderCard__info2">
          <h5>Destination:</h5>
          <h4>{order.destination}</h4>
        </div>
        <div className="currentOrderCard__infoDivider"></div>
        <div className="currentOrderCard__info3">
          <h5>Due Date:</h5>
          <h4>{dueDate}</h4>
        </div>
      </div>
      <div className="currentOrderCard__shipButton">
        <i class="fas fa-truck-moving"></i>
      </div>
    </div>
  );
};

export default CurrentOrderCard;
