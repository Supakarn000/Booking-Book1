import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        {/* <Featured/> */}
        <h1 className="homeTitle">How many book by type</h1>
        <PropertyList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
