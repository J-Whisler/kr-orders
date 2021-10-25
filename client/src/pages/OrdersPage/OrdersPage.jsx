import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderCard from "../../components/OrderCard/OrderCard";

const OrdersPage = () => {
  const [listOfOrders, setListOfOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/orders").then((response) => {
      setListOfOrders(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="App">
      {listOfOrders.map((order, key) => {
        return <OrderCard order={order} key={key}></OrderCard>;
      })}
    </div>
  );
};

export default OrdersPage;
