import "./Book.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Booking } from "../../components/booking/Booking";
import { SearchContext } from "../../context/SearchContext";

const Book = () => {
  const location = useLocation()
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  const {data,loading,error} = useFetch(`/books/find/${id}`);
  const {dates} = useContext(SearchContext);
  console.log(dates);

  const MILLISECONDS_PER_DAY = 1000*60*60*24;
  function dayDifference(date1,date2){
    const timeDiff = Math.abs(date2.getTime()-date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate,dates[0].startDate)

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleClick = () =>{
    if(user){
      setOpenModal(true);
      console.log("book");
    }else{
      navigate("/login")
    }
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? "loading" : <div className="bookContainer">
        <div className="bookWrapper">
          <button className="bookNow" onClick={handleClick}>Book now</button>
          <h1 className="bookTitle">{data.name}</h1>
          <h2>
            <b>Booking for </b>({days} Day)
          </h2>
          <span className="type">
            {data.type}
          </span>
          <div className="bookImages">
            {data.photos?.map((photo, i) => (
              <div className="bookImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo}
                  alt=""
                  className="bookImg"
                />
              </div>
            ))}
          </div>
          <div className="bookDetails">
            <div className="bookDetailsTexts">
              <h1 className="bookTitle">{data.title}</h1>
              <p className="bookDesc">
                {data.des}
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>}
      {openModal && <Booking setOpen={setOpenModal} bookId={id} />}
    </div>
  );
};

export default Book;
