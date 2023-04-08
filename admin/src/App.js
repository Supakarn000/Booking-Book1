import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { bookInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { bookColumns, roomColumns, userColumns } from "./datatablesource";
import NewBook from "./pages/newBook/NewBook";
import NewRoom from "./pages/newRoom/NewRoom";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const ProtectedRoute = ({children})=>{
    const {user} = useContext(AuthContext)
    if(!user){
      return <Navigate to="/login"/>
    }
    return children;
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route path="login" element={<Login />} />
          <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="users">
              <Route index element={<List columns={userColumns}/>} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="books">
              <Route index element={<List columns={bookColumns}/>} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<NewBook/>}
              />
            </Route>
            <Route path="rooms">
              <Route index element={<List columns={roomColumns}/>} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<NewRoom/>}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
