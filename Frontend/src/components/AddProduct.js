import axios from "axios";
import "./AddProduct.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      title,
      description,
      price,
      stock,
      brand,
    };

    axios
      .post("https://productapi-08xg.onrender.com/products", data)
      .then((res) => {
        alert("Data Added Successfully!");
        // console.log("Data successfully submitted:", res.data);
        navigate("/");
      })
      .catch((err) => {
        console.error("Error submitting data:", err);
      });

    // Reset form fields after submission
    setTitle("");
    setDescription("");
    setPrice("");
    setStock("");
    setBrand("");
  };

  const handleShowData = (event) => {
    event.preventDefault();
    // Handle displaying data here
    navigate("/");
  };

  return (
    <form className="p-3">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price:
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          className="form-control"
          required
          min="0"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="stock" className="form-label">
          Stock:
        </label>
        <input
          type="number"
          id="stock"
          name="stock"
          value={stock}
          onChange={(event) => setStock(event.target.value)}
          className="form-control"
          min="0"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="brand" className="form-label">
          Brand:
        </label>
        <input
          type="text"
          id="brand"
          name="brand"
          value={brand}
          onChange={(event) => setBrand(event.target.value)}
          className="form-control"
        />
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="btn btn-primary me-3"
      >
        Add Item
      </button>
      <button
        type="button"
        onClick={handleShowData}
        className="btn btn-secondary"
      >
        Show Data
      </button>
    </form>
  );
}

export default AddProduct;
