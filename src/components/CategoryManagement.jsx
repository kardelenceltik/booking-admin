import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState();

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
  const createCategoryHandler = () => {
    axios
      .post("http://localhost:9292/categories/create-category", { name: name })
      .then((response) => {
        if (response.status === 200) {
          getActiveCategoriesHandler();
          alert("eklendi");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="user-management-add-button-area">
        <Button
          variant="outlined"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Add
        </Button>
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
      {/* <!-- Modal --> */}
      <div
        class="modal fade mt-5"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Create Category
              </h5>

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Category Name"
                  variant="standard"
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>
            </div>
            <div class="modal-footer">
              <Button variant="outlined">Close</Button>
              <Button
                variant="outlined"
                onClick={() => createCategoryHandler()}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryManagement;
