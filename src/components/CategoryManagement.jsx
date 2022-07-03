import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);
  const getActiveCategoriesHandler = () => {
    axios
      .get("http://localhost:9292/categories/get-active-categories")
      .then((response) => {
        console.log(response);
        setCategories(response.data);
      });
  };
  useEffect(() => {
    getActiveCategoriesHandler();
  }, []);
  const deleteCategoryHandler = (categoryId) => {
    axios
      .post("http://localhost:9292/categories/delete-category", {
        id: categoryId,
      })
      .then((response) => {
        if (response.status === 200) {
          getActiveCategoriesHandler();
        } else {
          alert("no");
        }
      });
  };
  return (
    <div>
      <div className="user-management-add-button-area">
        <Button variant="outlined">Add</Button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{category._id}</td>
                <td>{category.name}</td>
                <td>
                  <Button variant="outlined">Update</Button>

                  <Button
                    variant="outlined"
                    onClick={() => deleteCategoryHandler(category._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryManagement;
