import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "../Header";
import TasksPage from "../TasksPage";
import UsersPage from "../UsersPage";


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
