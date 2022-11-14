import React, { useState, useEffect } from "react";
import axios from "axios";

function Product() {
  const [user, setUser] = useState([]);
  // console.log(user);

  const fetchData = async () => {
    const item = await axios.get("https://fakestoreapi.com/products");
    setUser(item.data);
    console.log(item.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-xl container-lg container-md container-sm container-xs mt-5">
      {user.map((comm) => (
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <div
              class="collapse navbar-collapse container-xl container-lg container-md container-sm container-xs"
              id="navbarSupportedContent"
            >
              <ul class="order-list navbar-nav me-auto mb-2 mt-3 ms-5 mb-lg-0">
                <li className="m-3 nav-item fs-4 fw-semibold font-monospace text-capitalize">
                  <a class="li nav-link">{comm.id}.</a>
                </li>
                <li className="m-3 nav-item fs-5 fw-semibold font-monospace text-capitalize">
                  <a class="li nav-link">{comm.title}</a>
                </li>
                <li className="m-3 nav-item">
                  <a class="nav-link">
                    <img
                      src={comm.image}
                      className="img-fluid rounded"
                      height="350px"
                      width="350px"
                      alt=""
                    />
                  </a>
                </li>
                <li className="m-3 nav-item fs-5 fw-semibold font-monospace text-capitalize">
                  <a class="li nav-link">{comm.description}</a>
                </li>
                <li className="m-3 nav-item fs-5 fw-semibold font-monospace text-capitalize">
                  <a class="li nav-link">{comm.category}</a>
                </li>
                <li className="m-3 nav-item fs-4 fw-semibold font-monospace text-capitalize">
                  <a class="li nav-link">{comm.price}</a>
                </li>
                <li className="m-3 nav-item fs-4 fw-semibold font-monospace text-capitalize">
                  <a class="li nav-link">{comm.rating.rate}</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ))}
    </div>
  );
}

export default Product;
