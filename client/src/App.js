import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Addproject from "./components/Addproject";
import List from "./components/List";
import Profile from "./components/Profile";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path={"/" | "/signup"} element={<Signup />} />
        <Route path="/addproject" element={<Addproject />} />
        <Route path="/list" element={<List />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
