import React, { useState } from "react";
import axios from "axios";

const CreateCategoryForm = () => {
  const [name, setName] = useState();
  const createCategoryHandler = () => {
    axios
      .post("http://localhost:9292/categories/create-category", { name })
      .then((response) => {
        alert("eklendi");
      });
  };

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => createCategoryHandler()}>tıktık</button>
    </div>
  );
};

export default CreateCategoryForm;
