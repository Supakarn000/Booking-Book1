import "./newBook.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { bookInputs } from "../../formSource";
import axios from "axios";
import useFetch from "../../hooks/useFetch";

const NewBook = () => {
  const [files, setFiles] = useState("");
  const [info,setInfo] = useState({});
  const {data,loading,error} = useFetch("/rooms");
  const [rooms,setRooms] = useState([])

  const handleChange = (e) =>{
    setInfo(prev=>({...prev,[e.target.id]:e.target.value}));
  };

  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setRooms(value);
  };

  const handleClick = async(e) =>{
    e.preventDefault()
    const data = new FormData();
    data.append("file",files);
    data.append("upload_preset","upload");
    try {
      const newBook = {
        ...info,rooms
      };
      await axios.post("/books",newBook)
    } catch (error) {
      //console.log(err);
    }
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Book</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {bookInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input id={input.id} onChange={handleChange} type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
                  <div className="selectRooms">
                  <label>Avaliable</label>
                  <select id="rooms" multiple onChange={handleSelect}>
                    {loading ? "loading" : data && data.map(room=>(
                      <option key={room._id} value={room._id}>{room.title}</option>
                    ))}
                  </select>
                </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBook;
