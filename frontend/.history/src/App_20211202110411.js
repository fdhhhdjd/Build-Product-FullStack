import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AddEdit from "./Components/AddEdit";
import View from "./Components/View";
import Header from "./Components/Header";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEdit />} />
        <Route path="/update/:id" element={<AddEdit />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </div>
  );
}

export default App;
