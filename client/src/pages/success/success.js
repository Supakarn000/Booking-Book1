import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./success.css";

const Success = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="guideContainer">
        <h1 className="bigText">Follow these 5 steps to get your book:</h1>
        <ol className="guideList">
          <li>Go to your library</li>
          <li>Tell the librarian or officer which book you booking in application</li>
          <li>Follow the librarian to the bookshelf where the book is located</li>
          <li>Retrieve your book from the shelf</li>
          <li>Enjoy reading!</li>
        </ol>
        <h1 className="bigText">Follow these 4 steps to return your book:</h1>
        <ol className="guideList">
          <li>Go to your library</li>
          <li>Tell the librarian or officer which book you want to return</li>
          <li>Return your book by giving librarian or officer</li>
          <li>Now you can booking more book in application</li>
        </ol>
      </div>
      <Footer />
    </div>
  );
};

export default Success;
