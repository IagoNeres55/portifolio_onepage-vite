import NavBar from "./NavBar";
import SectionProjects from "./SectionProjects";
import SectionText from "./SectionText";
import Abount from "./abount";
import Footer from "./footer";
import SectionTechnology from "./SectionTechnology";


export default function Index() {
  return (
    <>
      <NavBar />
      <SectionText />
      <SectionProjects />
      <SectionTechnology />
      <Abount />
      <Footer />
    </>
  );
}
