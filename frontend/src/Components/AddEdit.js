import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "../Styles/AddEdit.css";
import { toast } from "react-toastify";
import { Route } from "../ApiRoute/ApiRoute";
const initialState = {
  title: "",
  price: "",
};
const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const { title, price } = state;
  const { id } = useParams();
  const Navigate = useNavigate();
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title && !price) return toast.error("Please Enter Input");
    if (!id) {
<<<<<<< HEAD
      await axios.post("http://18.138.235.4:5000/products", {
=======
      await axios.post(`${Route}/products`, {
>>>>>>> 607d995bf9abec72efc7b0878423a8d50b2b3769
        title: title,
        price: price,
      });
      toast.success("Add Product Successful !");
    } else {
<<<<<<< HEAD
      await axios.patch(`http://18.138.235.4:5000/products/${id}`, {
=======
      await axios.patch(`${Route}/products/${id}`, {
>>>>>>> 607d995bf9abec72efc7b0878423a8d50b2b3769
        title: title,
        price: price,
      });
      toast.success("Edit Product Successful !");
    }

    Navigate("/");
  };
  const getProductId = async (id) => {
<<<<<<< HEAD
    const responsive = await axios.get(`http://18.138.235.4:5000/products/${id}`);
=======
    const responsive = await axios.get(`${Route}/products/${id}`);
>>>>>>> 607d995bf9abec72efc7b0878423a8d50b2b3769

    setState({ ...responsive.data });
  };
  useEffect(() => {
    getProductId(id);
  }, [id]);
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <form
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
          }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name 📛</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Your Name..."
            value={title || ""}
            onChange={handleChange}
          />
          <label htmlFor="name">Email 📧</label>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Your Email..."
            value={price || ""}
            onChange={handleChange}
          />
          <input type="submit" value={id ? "Edit" : "Save"} />
        </form>
      </div>
    </>
  );
};

export default AddEdit;
