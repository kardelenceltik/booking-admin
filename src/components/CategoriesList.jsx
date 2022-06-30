import axios from "axios";
import React, { useState, useEffect } from "react";

const CategoriesList = () => {
  const [cateories, setCategories] = useState([]);
  const getCategoryHandler = () => {
    axios
      .get("http://localhost:9292/categories/get-active-categories")
      .then((response) => {
        setCategories(response.data);
      });
  };
  useEffect(() => {
    getCategoryHandler();
  }, []);
  return (
    <div>
      {cateories.map((category) => {
        return <p key={category._id}>{category.name}</p>;
      })}
    </div>
  );
};

export default CategoriesList;
