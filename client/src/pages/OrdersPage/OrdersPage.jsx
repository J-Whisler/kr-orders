import React, { useEffect, useState } from "react";
import "./OrdersPage.scss";
import axios from "axios";
import OrderCard from "../../components/OrderCard/OrderCard";
import krLogo from "../../assets/kr-logo.png";

const OrdersPage = () => {
  const [listOfOrders, setListOfOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/orders").then((response) => {
      setListOfOrders(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="orderspage">
      <div className="orderspage__title">
        <h3>Current Orders</h3>
      </div>
      <div className="orderspage__ordersList">
        {listOfOrders.map((order, key) => {
          return <OrderCard order={order} key={key}></OrderCard>;
        })}
      </div>
    </div>
  );
};

export default OrdersPage;
