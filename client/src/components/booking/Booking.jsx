import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import "./Booking.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Booking = ({ setOpen, bookId }) => {
  //console.log("booked");
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`/books/room/${bookId}`);
  const {dates} = useContext(SearchContext)

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };
  //console.log(getDatesInRange(dates[0].startDate,dates[0].endDate));

  const alldates = getDatesInRange(dates[0].startDate,dates[0].endDate)
  const isAvailable = (roomNumber) => {
    const isFound = roomNumber?.unavailableDates?.some((date) => {
      const timestamp = new Date(date).getTime();
      return alldates.some((rangeDate) => {
        return timestamp >= rangeDate && timestamp <= rangeDate + 24 * 60 * 60 * 1000;
      });
    });
    return !isFound;
  };
  
  //console.log(getDatesInRange())

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(checked ? [...selectedRooms, value] : selectedRooms.filter((item)=>item !== value))
  };

  const navigate = useNavigate()
  
  const handleClick = async () => {
    try { 
      const promises = selectedRooms.map(async (roomId) => {
        const res = await axios.put(`/rooms/availability/${roomId}`, {
          dates: alldates,
        });
        console.log(`Room ${roomId} availability updated: `, res.data);
        return res.data;
      });
      await Promise.all(promises);
      navigate("/success");

    } catch (err) {
      console.error('Error updating room availability: ', err);
    }
  };
  
  
  return (
    <div className="booking">
      <div className="rContainer">
        <h1></h1>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="bClose"
          onClick={() => setOpen(false)}
        />
        <span>Select Book:</span>
        {data.map((item) => (
          <div className="bItem" key={item._id}>
            <div className="bItemInfo">
              <div className="bTitle">{item.title}</div>
              <div className="bDes">{item.desc}</div>
            </div>
            <div className="bSelectRooms">
              {item.roomNumber.map((roomNumber) => (
                <div className="room" key={roomNumber._id}>
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
            ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="bbutton">Book now</button>
      </div>
    </div>
  );
};


export default Booking;
