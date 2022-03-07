import { Routes, Route, BrowserRouter } from "react-router-dom";
import UsersPage from "pages/UsersPage";
import PostsPage from "pages/PostsPage";
import Layout from 'containers/_Layout';
import HomePage from "pages/Home";
import UserPage from "pages/UserPage";

function App() {
  return (<BrowserRouter>
    <Layout>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/users" element={<UsersPage />} />
          <Route exact path="/user/:id" element={<UserPage />} />
          <Route exact path="/users/:id/posts" element={<PostsPage/>} />
        </Routes>
      </div>
    </Layout>
  </BrowserRouter>);
}

export default App;
