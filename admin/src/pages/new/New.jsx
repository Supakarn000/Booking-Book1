import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";


const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [info,setInfo] = useState({});

  const handleChange = (e) =>{
    setInfo(prev=>({...prev,[e.target.id]:e.target.value}));
  };

  const handleClick = async(e) =>{
    e.preventDefault()
    const data = new FormData();
    data.append("file",file);
    data.append("upload_preset","upload");
    try {
      const newUser = {
        ...info,
      };
      await axios.post("/auth/register",newUser)
    } catch (error) {
      //console.log(err);
    }
  }

  console.log(info);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
          </div>
          <div className="right">
            <form>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input onChange={handleChange} type={input.type} placeholder={input.placeholder} id={input.id}/>
                </div>
              ))}
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
