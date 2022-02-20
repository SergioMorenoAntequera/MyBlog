import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "containers/Header";
import TasksPage from "pages/TasksPage";
import UsersPage from "pages/UsersPage";
import PostsPage from "pages/PostsPage";


function App() {
  return (<BrowserRouter>

    <div className="App">
      <Header/>
      
      <Routes>
        <Route exact path="/" element={<UsersPage />} />
        <Route exact path="/users" element={<UsersPage />} />
        <Route exact path="/users/:id/posts" element={<PostsPage/>} />
        <Route exact path="/tasks" element={<TasksPage />} />
      </Routes>
    </div>

  </BrowserRouter>);
}

export default App;
