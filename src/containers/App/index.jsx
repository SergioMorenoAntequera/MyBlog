import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "containers/Header";
import TasksPage from "containers/TasksPage";
import UsersPage from "containers/UsersPage";


function App() {
  return (<BrowserRouter>

    <div className="App">
      <Header/>
      
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Routes>
    </div>

  </BrowserRouter>);
}

export default App;
