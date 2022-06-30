import CategoriesList from "./components/CategoriesList";
import CreateCategoryForm from "./components/CreateCategoryForm";
import UserCreateForm from "./components/UserCreateForm";
import UserList from "./components/UserList";

function App() {
  return (
    <div>
      <UserCreateForm />
      <UserList />
      <CreateCategoryForm />
      <CategoriesList />
    </div>
  );
}

export default App;
