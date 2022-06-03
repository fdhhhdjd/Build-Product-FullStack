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
      await axios.post(`${Route}/products`, {
        title: title,
        price: price,
      });
      toast.success("Add Product Successful !");
    } else {
      await axios.patch(`${Route}/products/${id}`, {
        title: title,
        price: price,
      });
      toast.success("Edit Product Successful !");
    }

    Navigate("/");
  };
  const getProductId = async (id) => {
    const responsive = await axios.get(`${Route}/products/${id}`);

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
