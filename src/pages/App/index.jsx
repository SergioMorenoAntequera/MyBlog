import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from 'containers/_Layout';
import HomePage from "pages/Home";
import UserPage from "pages/UserPage";
import PostPage from "pages/PostPage";

function App() {
  return (<BrowserRouter>
    <Layout>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/user/:id" element={<UserPage />} />
          <Route exact path="/posts/:id" element={<PostPage/>} />
        </Routes>
      </div>
    </Layout>
  </BrowserRouter>);
}

export default App;
