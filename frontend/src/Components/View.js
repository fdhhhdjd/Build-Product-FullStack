import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../Styles/View.css";
import { Route } from "../ApiRoute/ApiRoute";

const View = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const getProductDetail = async (id) => {
<<<<<<< HEAD
    const product = await axios.get(`http://18.138.235.4:5000/products/${id}`);
=======
    const product = await axios.get(`${Route}/products/${id}`);
>>>>>>> 607d995bf9abec72efc7b0878423a8d50b2b3769
    setUser({ ...product.data });
    console.log({ ...product });
  };
  useEffect(() => {
    getProductDetail(id);
  }, [id]);
  return (
    <>
      <div style={{ marginTop: "150px" }}>
        <div className="card">
          <div className="card-header">
            <p>User Contact Detail</p>
          </div>
          <div className="container">
            <strong>ID: </strong>
            <span>{id}</span>
            <br />
            <br />
            <strong>Title: </strong>
            <span>{user.title}</span>
            <br />
            <br />
            <strong>Price: </strong>
            <span>{user.price}</span>
            <br />
            <br />

            <br />
            <br />
            <Link to="/">
              <button className="btn btn-edit">Go Back</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
