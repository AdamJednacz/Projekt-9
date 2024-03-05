
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./jsx/Header";
import Main from "./jsx/Main";
import Footer from "./jsx/Footer";
const App = () => {
  return (
 <>
     <Header/>
     <Main/>
     <Footer/>
 </>
  );
}

export default App;
