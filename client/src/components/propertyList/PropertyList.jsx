import "./propertyList.css";
import useFetch from "../../hooks/useFetch.js";

const PropertyList = () => {

  const { data, loading, error} = useFetch("/books/countBytype2");
  console.log(data)
  const images = [
    "https://bloody-disgusting.com/wp-content/uploads/2019/01/psycho-shower-e1552665392444.jpg",
    "https://w7.pngwing.com/pngs/161/32/png-transparent-apple-background-books-education-theme-education-science-school-learning-education.png",
    "https://m.media-amazon.com/images/G/01/seo/siege-lists/best-mystery-audiobooks-social.jpg",
    "https://t3.ftcdn.net/jpg/05/26/52/00/360_F_526520034_MBjNdsahh5ewKpl54F9lTvnzR0phgToZ.jpg",
    "https://www.york.ac.uk/media/study/courses/undergraduate/history/hero-history-economics-ba-1160.jpg",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
