import React from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from "./components/AppLayout/AppLayout";
import BorderRadiusPreviewer from "./components/Pages/BorderRadiusPreviewer/BorderRadiusPreviewer";
import HomePage from "./components/Pages/HomePage/HomePage";
import SearchBooks from "./components/Pages/SearchBooks/SearchBooks";

function App() {
  return (
      <Routes>
          <Route path={"/"} element={<AppLayout/>}>
              <Route index element={<HomePage/>}/>
              <Route path={"borderRadius"} element={<BorderRadiusPreviewer/>}/>
              <Route path={"searchBooks"} element={<SearchBooks/>}/>
          </Route>
      </Routes>
  );
}

export default App;
