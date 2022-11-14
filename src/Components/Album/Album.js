import React, { useState, useEffect } from "react";
import axios from "axios";

function Album() {
  const [user, setUser] = useState([]);
  // console.log(user);

  const fetchData = async () => {
    const item = await axios.get("https://jsonplaceholder.typicode.com/photos");
    setUser(item.data);
    console.log(item.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-xl container-lg container-md container-sm container-xs mt-5">
      <div className="row">
      {user.map((comm) => (
        <div className="card mt-4 ms-3" style={{width: "18rem"}}>
          <img src={comm.url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 key={comm.id} className="card-title">
            <span className="text-warning me-3">{comm.id}.</span>
            <span className="text-dark fs-5 fw-semibold font-monospace text-capitalize">{comm.title}</span>
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Album;
