import "./newRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { roomInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const NewRoom = ({ }) => {
  const [info, setInfo] = useState({});
  const [bookId, setBookId] = useState(undefined);
  const [rooms, setRooms] = useState([]);

  const { data, loading, error } = useFetch("/books");

  const handleChange = (e) => {
    setInfo(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault()
    const roomNumber = rooms.split(",").map((room) => ({ number: room }));
    try {
      await axios.post(`/rooms/${bookId}`, { ...info, roomNumber })
    } catch (error) {
      console.log(error);
    }
  }
  console.log(info)
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add new avaliable book</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {roomInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleChange} />
                </div>
              ))}
              <div className="formInput">
                <label>Amount of book</label>
                <textarea onChange={(e) => setRooms(e.target.value)} placeholder="Ex. 521,522" />
              </div>
              {/* <div className="formInput">
                <label>Choose Book</label>
                <select id="bookId" onChange={(e) => setBookId(e.target.value)}>
                  {loading ? "loading" : data && data.map(book => (
                    <option key={book._id} value={book._id}>{book.name}</option>
                  ))}
                </select>
              </div> */}
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
