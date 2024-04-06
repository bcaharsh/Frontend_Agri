import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FertilizerContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [] // Initialize an empty array to store cart items
        };
    }
    addToCart = (item) => {
        // Retrieve postId from cookies
        const cookies = document.cookie.split(';');
        let postId = null;
        cookies.forEach(cookie => {
            const [name, value] = cookie.trim().split('=');
            if (name === 'postId') { // Check for postId cookie
                postId = value; // Set postId if found
            }
        });

        // Get the existing cart items from local storage
        let existingItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Check if the item is already in the cart
        const isItemInCart = existingItems.some(cartItem =>
            cartItem.Product_name === item.Product_name &&
            cartItem.postId === postId
        );

        if (isItemInCart) {
            // Show an alert if the item is already in the cart
            alert('Item is already added to the cart!');
        } else {
            // Add the postId to the item
            item.postId = postId;

            // Add the new item to the existing items array
            existingItems.push(item);

            // Update the local storage with the new items array
            localStorage.setItem('cartItems', JSON.stringify(existingItems));
        }
    }



    render() {
        const { product } = this.props;

        return (
            Array.isArray(product.product) && product.product.length > 0 ? (
                product.product.map((item, index) => (
                    <div key={index} className="card mb-3 m-3 p-1 d-inline-flex" style={{ maxWidth: '540px', borderRadius: '15px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <input type="image" src={'http://127.0.0.1:8000/' + item.Product_image} className="img-fluid rounded-start h-100" alt="#" style={{ borderRadius: '15px 0px 0px 15px' }} />
                            </div>
                            <div className="col-md-8 d-flex align-items-center">
                                <div className="card-body">
                                    <h5 className="card-title" style={{ color: '#333', fontWeight: 'bold' }}>{item.Product_name}</h5>
                                    <p className="card-text text-left" style={{ color: '#666' }}>{item.Description}</p>
                                    <h4 className='text-left'>Price: {item.Price} <i className="fa fa-inr"></i></h4>
                                    <p className="card-text text-right">
                                        {/* Call addToCart function with the current item */}
                                        {
                                            !this.props.check ?  (null):(<Link to='/cart' onClick={() => this.addToCart(item)} className='btn btn-primary'>Add to cart</Link>)
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div>No data available.</div>
            )
        );
    }
}

export default FertilizerContent;
