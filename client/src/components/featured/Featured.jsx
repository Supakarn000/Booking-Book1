import "./featured.css";
import useFetch from "../../hooks/useFetch.js";

const Featured = () => {

  const { data, loading, error} = useFetch("/books/countBytype1?type1=Horror,Education,Mystery");
  console.log(data)
  return (
    <div className="featured">
      {loading ? ("Loading please wait"):<><div className="featuredItem">
        <img
          src="https://townsquare.media/site/677/files/2016/10/RS7177_481459991-scr.jpg?w=980&q=75"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Horror</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://www.thoughtco.com/thmb/oXmDTSr4UYFf15F2jO9WzyeC270=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-schoolboy-writing-in-class-480811313-598202fa22fa3a0010232a66.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Education</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cdn.pixabay.com/photo/2020/02/08/17/36/mysterious-4830751_960_720.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mystery</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div></>}
    </div>
  );
};

export default Featured;
