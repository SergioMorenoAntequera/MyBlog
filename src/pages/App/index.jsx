import { Routes, Route, BrowserRouter } from "react-router-dom";
import TasksPage from "pages/TasksPage";
import UsersPage from "pages/UsersPage";
import PostsPage from "pages/PostsPage";
import Layout from 'containers/Layout';

function App() {
  return (<BrowserRouter>
    <Layout>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<UsersPage />} />
          <Route exact path="/users" element={<UsersPage />} />
          <Route exact path="/users/:id/posts" element={<PostsPage/>} />
          <Route exact path="/tasks" element={<TasksPage />} />
        </Routes>
      </div>
    </Layout>
  </BrowserRouter>);
}

export default App;
