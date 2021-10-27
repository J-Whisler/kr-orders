import React, { useEffect, useState } from "react";
import "./OrdersPage.scss";
import axios from "axios";
import CurrentOrderCard from "../../components/CurrentOrderCard/CurrentOrderCard";
import ShippedOrderCard from "../../components/ShippedOrderCard/ShippedOrderCard";

const OrdersPage = () => {
  const [listOfAllOrders, setListOfAllOrders] = useState([]);
  const [ordersDisplayed, setOrdersDisplayed] = useState(1);

  useEffect(() => {
    axios.get("http://localhost:5000/orders").then((response) => {
      setListOfAllOrders(response.data);
    });
  }, []);

  const handleDropdownClick = (index) => {
    setOrdersDisplayed(index);
  };

  //   Current and Shipped order filtering

  const listOfCurrentOrders = listOfAllOrders.filter(
    (currentOrder) => !currentOrder.isShipped
  );

  const listOfShippedOrders = listOfAllOrders.filter(
    (shippedOrder) => shippedOrder.isShipped
  );

  return (
    <div className="orderspage">
      <div className="orderspage__title">
        {ordersDisplayed === 1 && <h3>Current Orders</h3>}
        {ordersDisplayed === 2 && <h3>Shipped Orders</h3>}
        {ordersDisplayed === 3 && <h3>All Orders</h3>}
      </div>
      <div className="orderspage__filterDropdown">
        <select name="selectList" id="selectList">
          <option value="option 1" onClick={() => handleDropdownClick(1)}>
            Current
          </option>
          <option value="option 2" onClick={() => handleDropdownClick(2)}>
            Shipped
          </option>
          <option value="option 3" onClick={() => handleDropdownClick(3)}>
            All
          </option>
        </select>
      </div>

      <div className="orderspage__ordersList">
        {ordersDisplayed === 1 &&
          listOfCurrentOrders.map((currentOrder, key) => (
            <CurrentOrderCard order={currentOrder} key={key}></CurrentOrderCard>
          ))}
        {ordersDisplayed === 2 &&
          listOfShippedOrders.map((shippedOrder, key) => (
            <ShippedOrderCard order={shippedOrder} key={key}></ShippedOrderCard>
          ))}

        {ordersDisplayed === 3 && (
          <>
            {listOfCurrentOrders.map((currentOrder, key) => (
              <CurrentOrderCard
                order={currentOrder}
                key={key}
              ></CurrentOrderCard>
            ))}
            {listOfShippedOrders.map((shippedOrder, key) => (
              <ShippedOrderCard
                order={shippedOrder}
                key={key}
              ></ShippedOrderCard>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
