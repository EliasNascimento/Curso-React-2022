import "./App.css";
import logo from "./logo.svg";
// - 1 - config react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Product from "./pages/product/product";
import Info from "./pages/info/Info";
import NotFound from "./pages/notFound/NotFound";
import Search from "./pages/search/search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="app_title"> React Router</h1>
      </header>
      <BrowserRouter>
        {/* 2 - links com React Router */}
        <Navbar />

        {/* 9 - search */}
        <SearchForm />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* 6 - nested routes */}
          <Route path="/products/:id/info" element={<Info />} />

          {/* 4 - rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />

          {/* 9 - search */}
          <Route path="/search" element={<Search />} />

          {/* 10 - redirect */}
          <Route path="/company" element={<Navigate to="/about" />} />

          {/* 7 - no match route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
