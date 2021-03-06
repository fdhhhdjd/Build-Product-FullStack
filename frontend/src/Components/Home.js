import React, { useEffect, useState } from "react";
import "../Styles/Home.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Route } from "../ApiRoute/ApiRoute";

const Home = () => {
  const [data, setData] = useState([]);
  const GetProduct = async () => {
<<<<<<< HEAD
    const response = await axios.get("http://18.138.235.4:5000/products");
=======
    const response = await axios.get(`${Route}/products`);
>>>>>>> 607d995bf9abec72efc7b0878423a8d50b2b3769
    setData(response.data);
    console.log(response);
  };

  const DeleteProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this product ?")) {
      await axios.delete(`${Route}/products/${id}`);
      toast.success("Product deleted success");
      GetProduct();
    } else {
      toast.error("Thank you !");
    }
  };
  useEffect(() => {
    GetProduct();
  }, []);
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <table className="styled-table">
          <thead>
            <tr>
              <td style={{ textAlign: "center" }}>No.</td>
              <td style={{ textAlign: "center" }}>Title</td>
              <td style={{ textAlign: "center" }}>Price</td>
              <td style={{ textAlign: "center" }}>Action</td>
            </tr>
          </thead>

          <tbody>
            {data &&
              data
                ?.sort((a, b) => (a.title < b.title ? -1 : 1))
                .map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>
                        <Link to={`/update/${item.id}`}>
                          <button className="bttn btn-edit">Edit</button>
                        </Link>
                        <button
                          className="bttn btn-delete"
                          onClick={() => DeleteProduct(item.id)}
                        >
                          Delete
                        </button>
                        <Link to={`/view/${item.id}`}>
                          <button className="bttn btn-view">View</button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
