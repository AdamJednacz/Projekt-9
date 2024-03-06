import './App.scss';
import {BrowserRouter, Routes, Route,Router} from "react-router-dom";
import Main from "./jsx/Main";
import PhotoGallery from "./jsx/PhotoGallery";
import Projects from "./jsx/Projects";
import Certifications from "./jsx/Certifications";
import Contacts from "./jsx/Contacts";


const App = () => {
    return (

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/photos" element={<PhotoGallery/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/certifications" element={<Certifications/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                </Routes>
            </BrowserRouter>

    );
}

export default App;
