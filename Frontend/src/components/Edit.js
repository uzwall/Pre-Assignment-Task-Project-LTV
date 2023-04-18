import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    brand: "",
  });

  useEffect(() => {
    axios
      .get("https://productapi-08xg.onrender.com/products/" + id)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, [id]);

  const handleShowData = (event) => {
    event.preventDefault();
    // Handle displaying data here
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put("http://localhost:8000/products/" + id, data).then((res) => {
      alert("Data Updated Succesfully!");
      navigate("/");
    });
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
          value={data.title}
          className="form-control"
          required
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={data.description}
          className="form-control"
          onChange={(e) => setData({ ...data, description: e.target.value })}
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
          value={data.price}
          className="form-control"
          required
          min="0"
          onChange={(e) => setData({ ...data, price: e.target.value })}
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
          value={data.stock}
          className="form-control"
          min="0"
          onChange={(e) => setData({ ...data, stock: e.target.value })}
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
          value={data.brand}
          className="form-control"
          onChange={(e) => setData({ ...data, brand: e.target.value })}
        />
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="btn btn-primary me-3"
      >
        Update Product
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

export default Edit;
