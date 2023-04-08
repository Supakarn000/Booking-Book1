import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Book from "./pages/Book/Book";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Success from "./pages/success/success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login/>}/> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<List/>}/>
        <Route path="/books/:id" element={<Book/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
