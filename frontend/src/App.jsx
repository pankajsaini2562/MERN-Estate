import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import signIn from "./pages/SignIn";
import signup from "./pages/SignUp";
import Header from "./components/Header";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/profile" Component={Profile} />
        <Route path="/sign-in" Component={signIn} />
        <Route path="/sign-up" Component={signup} />
      </Routes>
    </BrowserRouter>
  );
}
