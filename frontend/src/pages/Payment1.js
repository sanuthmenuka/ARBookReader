import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom"
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const Payment = () => {
  // Use a ref to track the PayPal buttons container
  const paypalButtonContainerRef = useRef(null);
  const [needToCall, setNeedToCall] = React.useState(false);

/*  useEffect(() => {
    if (needToCall) {
      console.log("pppp");
      // Initialize the PayPal SDK
      const paypal = window.paypal;
      paypal
        .Buttons({
          style: {
            shape: 'rect',
            color: 'gold',
            layout: 'vertical',
            label: 'subscribe',
          },
          createOrder: function () {
            console.log("fetch")
            return fetch("/api/pay", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                items: [
                  {
                    id: 1,
                    quantity: 2,
                  },
                  { id: 2, quantity: 3 },
                ],
              }),
            })
              .then(res => {
                if (res.ok) return res.json();
                return res.json().then(json => Promise.reject(json));
              })
              .then(({ id }) => {
                return id;
              })
              .catch(e => {
                console.error(e);
              });
          },
          onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
              console.log('Payment successful:', details);
              // Handle your logic for a successful payment here
            });
          },
        })
        .render(paypalButtonContainerRef.current); // Renders the PayPal button
    } else {
      setNeedToCall(true);
    }
  }, [needToCall]);

  return (
    <div>
      <div ref={paypalButtonContainerRef}></div>
    </div>
  );*/


 
    const createOrder = async (data) => {
      // Order is created on the server and the order id is returned
      const response = await fetch("/my-server/create-paypal-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // use the "body" param to optionally pass additional order information
            // like product skus and quantities
            body: JSON.stringify({
                cart: [
                    {
                        sku: "YOUR_PRODUCT_STOCK_KEEPING_UNIT",
                        quantity: "YOUR_PRODUCT_QUANTITY",
                    },
                ],
            }),
        });
        const order = await response.json();
        return order.id;
    };
    const onApprove = async (data) => {
       // Order is captured on the server and the response is returned to the browser
       const response = await fetch("/my-server/capture-paypal-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderID: data.orderID
            })
        });
        return await response.json();
    };
    return (
      <PayPalButtons
        createOrder={(data,actions) => createOrder(data, actions)}
        onApprove={(data,actions) => onApprove(data, actions)}
      />
    );
  }
  

export default Payment;
