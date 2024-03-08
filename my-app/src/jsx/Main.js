import React from 'react';
import About from "./About";
import View from "./View";
import Mission from "./Mission";
import ProjectsView from "./ProjectsView";
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
           <ProjectsView/>
           <ContactForm/>
           <Footer/>
        </>
    );
};

export default Main;