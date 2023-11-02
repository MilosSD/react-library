import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { Homepage } from "./layouts/HomePage/Homepage";
import { SearchBooksPage } from "./layouts/SearchBooksPage/SearchBooksPage";

export const App = () => {
  return (
    <div>
      <Navbar/>
      {/*<Homepage/>*/}
      <SearchBooksPage/>
      <Footer/>
    </div>
  );
};
