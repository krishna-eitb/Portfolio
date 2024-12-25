import AboutSection from "./components/AboutSection";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import ExperienceSection from "./components/ExperianceSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectListing from "./components/ProjectListing";
import ProjectsSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SkillSection/>
      <ExperienceSection/>
      <ProjectsSection/>
      {/* <ProjectListing/> */}
      <AboutSection/>
      {/* <AboutUs/> */}
      <ContactUs/>
      <Footer/>
     
    </>
  );
}
