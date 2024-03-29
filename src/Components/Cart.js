import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useRazorpay from "react-razorpay";

function Cart() {
  const [product, setProduct] = useState([]); // Store products fetched from local storage
  const [prices, setPrices] = useState({}); // Store total prices for each product
  const [totalPrice, setTotalPrice] = useState(''); // Store the total price

  const [Razorpay] = useRazorpay();

  useEffect(() => {
    // Retrieve postId from cookies
    const cookies = document.cookie.split(';');
    let postId = null;
    cookies.forEach(cookie => {
      const [name, value] = cookie.trim().split('=');
      if (name === 'postId') { // Check for postId cookie
        postId = value; // Set postId if found
      }
    });

    // Retrieve products from local storage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Filter cart items based on postId
    const filteredItems = cartItems.filter(item => item.postId === postId);

    // Initialize prices with default prices
    const defaultPrices = {};
    filteredItems.forEach(item => {
      defaultPrices[item.id] = item.Price; // Assuming item.id is unique
    });

    // Set filtered items and default prices to component state
    setProduct(filteredItems);
    setPrices(defaultPrices);
  }, []);

  const pricehandle = (event, item) => {
    const selectedValue = event.target.value;
    const totalprice = selectedValue * item.Price;
    setPrices(prevPrices => ({
      ...prevPrices,
      [item.id]: totalprice // Store total price for this product ID
    }));
  };

  const deleteitem = (item) => {
    // Get the existing cart items from local storage
    let existingItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Remove the item with the matching postId and id
    const updatedItems = existingItems.filter(cartItem => !(cartItem.postId === item.postId && cartItem.id === item.id));

    console.log("Updated Items:", updatedItems);

    // Update the local storage with the updated items array
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));

    // Update the component state to reflect the changes
    setProduct(updatedItems);
    window.location.reload();
}

  const Complete_payment=(payment_id,order_id,signature,amount)=>{
    axios.post('http://127.0.0.1:8000/order/complete/', {
      "payment_id":payment_id,
      "order_id":order_id,
      "signature": signature,
      "amount": amount
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log("Error", error);
    });

  }

  const handleBuy = (item) => {
    axios.post('http://127.0.0.1:8000/order/create/', {
      "amount": prices[item.id]*100,
      "currency": "INR"
    })
    .then(response => {
      console.log(response.data);
      console.log(response.data.data.id);
      const orderid = response.data.data.id;

      const options = {
        key: "rzp_test_2PQwJ271XWxRs2", // Enter the Key ID generated from the Dashboard
        name: "NFGA",
        description: "Test Transaction",
        image: "/images/Green_and_White_Flat_Illustrative_Feeding_Plant_Agriculture_Logo-removebg-preview.png",
        order_id: orderid, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
        handler: function (response) {
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
          Complete_payment(
            response.razorpay_payment_id,
            response.razorpay_order_id,
            response.razorpay_signature,
            prices[item.id]
          )
        },
        prefill: {
          name: "Piyush Garg",
          email: "youremail@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);

      rzp1.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

      rzp1.open();
    })
    .catch(error => {
      console.log(error);
    });
    // console.log(prices[item.id]);
    
  }

  const options = [];
  for (let i = 1; i < 10; i++) {
    options.push(<option key={i} value={i}>{i}</option>);
  }

  // Calculate total price
  // let totalPriceValue = 0;
  // for (const price of Object.values(prices)) {
  //   totalPriceValue += price || 0; // Add the price to the total price (handle cases where price is undefined)
  // }

  return (
    <div className="p-4">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total Price</th>
              <th scope="col">Buy Product</th>
            </tr>
          </thead>
          <tbody>
          {Array.isArray(product) && product.map((item, index) => (
            <tr key={index}>
              <td><img src={'http://127.0.0.1:8000/' + item.Product_image} className='w-25' style={{ height: '100px' }} alt="proimg" /></td>
              <td><label htmlFor="">{item.Product_name}</label><br />
                <a href="/fertilizer">View More Product</a><br />
                <button className='btn' onClick={() => deleteitem(item)}>Delete item</button>
              </td>
              <td><label htmlFor="">{item.Price}</label></td>
              <td>
                <select name="qty" id="" onChange={(event) => pricehandle(event, item)}>
                  {options}
                </select>
              </td>
              <td>{prices[item.id]}</td> {/* Display total price for this item */}
              <td><button onClick={() => handleBuy(item)} className='btn'>Buy</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div className=' w-25'>
          <h2>Total Price: {totalPriceValue}</h2>
        </div>
      </div> */}
    </div>
  </div>
  );
}

export default Cart;

