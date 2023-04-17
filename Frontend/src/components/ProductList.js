import "./ProductList.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function ProductList() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/products/").then((res) => {
      setColumns(Object.keys(res.data[0]).filter((item) => item !== "__v"));
      setRecords(res.data);
    });
  }, [records]);

  function deleteSubmit(id) {
    axios
      .delete("http://localhost:8000/products/" + id)
      .then((res) => {
        alert("Data has Deleted Successfully!");
        navigate("/");
      })
      .catch((e) => console.log(e));
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((item, index) => (
              <th key={index}> {item}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>{item.brand}</td>
              <td>
                <button className="edit">
                  <Link to={`/update/${item._id}`}>Edit</Link>
                </button>

                <button
                  className="delete"
                  onClick={() => deleteSubmit(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
