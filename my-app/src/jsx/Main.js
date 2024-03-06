import React from 'react';
import About from "./About";
import View from "./View";
import Mission from "./Mission";
import ProjectsMain from "./ProjectsMain";
import ContactForm from "./ContactForm";
import Header from "./Header";
import Footer from "./Footer";

const Main = () => {
    return (
        <>
           <Header/>
           <View/>
           <About/>
           <Mission/>
           <ProjectsMain/>
           <ContactForm/>
           <Footer/>
        </>
    );
};

export default Main;