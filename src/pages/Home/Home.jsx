import Hero from "../../components/Hero";
import ToletList from "../../components/home/ToletList";
import AboutUs from "../about-us/AboutUs";
import Contact from "../contact/Contact";

function Home() {
  return (
    <div>
      <Hero />
      <ToletList />
      <AboutUs />
      <Contact />
    </div>
  );
}

export default Home;
