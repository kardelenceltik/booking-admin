import CategoriesList from "./components/CategoriesList";
import CreateCategoryForm from "./components/CreateCategoryForm";
import UserCreateForm from "./components/UserCreateForm";
import UserList from "./components/UserList";
import Navbar from "./components/Navbar";
import "./App.css";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div>
      {/* <div>
        <Navbar />
      </div> */}

      <div>
        <Sidebar />
      </div>
      <div style={{ height: "75px" }}></div>
      {/* <UserCreateForm />
      <UserList /> */}
      {/* <CreateCategoryForm /> */}
      {/* <CategoriesList /> */}
    </div>
  );
}

export default App;
