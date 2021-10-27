import React from "react";
import "./OrderCard.scss";

const OrderCard = ({ order }) => {
  //   const dueDate = order.dueDate;
  //     let dueDateFormatted = dueDate.split(/[- :]/);
  //     dueDateFormatted[1]--;
  //     //   const dateObject = new Date(...dueDateFormatted);
  //     const dueDateDay = dueDateFormatted[2].substring(0, 2);
  //     console.log(dueDateDay);

  //     const fullDueDateFormatted = `${dueDateFormatted[1]}/${dueDateDay}/${dueDateFormatted[0]}`;
  //     console.log(fullDueDateFormatted);

  //   Order Date Formatting
  const orderDateSql = order.orderDate;
  let orderDateSqlFormatted = orderDateSql.split(/[- :]/);
  const orderDateSqlFormattedDay = orderDateSqlFormatted[2].substring(0, 2);
  const orderDateFinalFormat = `${orderDateSqlFormatted[1]}/${orderDateSqlFormattedDay}/${orderDateSqlFormatted[0]}`;
  console.log(orderDateFinalFormat);

  //   Due Date Formatting
  const dueDateSql = order.dueDate;
  let dueDateSqlFormatted = dueDateSql.split(/[- :]/);
  const dueDateSqlFormattedDay = dueDateSqlFormatted[2].substring(0, 2);
  const dueDateFinalFormat = `${dueDateSqlFormatted[1]}/${dueDateSqlFormattedDay}/${dueDateSqlFormatted[0]}`;
  //   console.log(dueDateFinalFormat);

  //   Ship Date Formatting
  //   const shipDateSql = order.shipDate;
  //   let shipDateSqlFormatted = shipDateSql.split(/[- :]/);
  //   const shipDateSqlFormattedDay = shipDateSqlFormatted[2].substring(0, 2);
  //   const shipDateFinalFormat = `${shipDateSqlFormatted[1]}/${shipDateSqlFormattedDay}/${shipDateSqlFormatted[0]}`;

  return (
    <div className="ordercard__container">
      <h2 className="">{order.containerType}</h2>
      <h5>{orderDateFinalFormat}</h5>
      <h5>{dueDateFinalFormat}</h5>
    </div>
  );
};

export default OrderCard;
