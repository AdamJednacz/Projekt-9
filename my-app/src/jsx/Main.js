import React from 'react';
import About from "./About";
import View from "./View";
import Mission from "./Mission";
import ProjectsMain from "./ProjectsMain";
import ContactForm from "./ContactForm";

const Main = () => {
    return (
        <>
           <View/>
           <About/>
           <Mission/>
           <ProjectsMain/>
           <ContactForm/>
        </>
    );
};

export default Main;