import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import NewPet from "./pages/NewPet/NewPet";
import React from "react";
import PetContext from "./contexts/PetContext";
import "./App.css";
import { CardHeader } from "@mui/material";

const App = () => {
  return (
    <PetContext>
      <Router>
        <NavBar />
        <CardHeader>Adocao</CardHeader>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/new-pet" element={<NewPet />}></Route>
          </Routes>
        </div>
      </Router>
    </PetContext>
  );
};

export default App;
