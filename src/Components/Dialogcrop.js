import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DialogCrop() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/apiget/')
      .then(function (response) {
        setPostData(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <>
      <div className="mt-3">
        <h1> Crop Preservation </h1>
        <hr className="m-1" />
      </div>
      <div className="container p-4">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 justify-content-left">
          {Array.isArray(postData) && postData.length > 0 ? (
            postData.map((post, index) => (
              <div className="col mb-4" key={index}>
                <div className="card">
                  <img src={'http://127.0.0.1:8000/' + post.Crop_image} alt='card' className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{post.Crop_name}</h5>
                    <h6 className='card-subtitle mb-2 text-muted'>Temp:{post.Crop_Temp}</h6>
                    <p className="card-text">{post.Crop_Description}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </>
  );
}
