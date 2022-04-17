import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "pages/Home";
import UserPage from "pages/UserPage";
import PostPage from "pages/PostPage";
import Scaffold from "layout/Scaffold";
import '../reset.scss'
import NewPostPage from "pages/NewPostPage";

function App() {
  return (<BrowserRouter>
    <Scaffold>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/user/:id" element={<UserPage />} />
          <Route exact path="/posts/:id" element={<PostPage/>} />
          <Route exact path="/posts/new" element={<NewPostPage/>} />
        </Routes>
      </div>
    </Scaffold>
  </BrowserRouter>);
}

export default App;
