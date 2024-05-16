import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
    getNews();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // Navigate to the login page after logout
  };

  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=18899508ff7a4f8b92da27fafb2cd761"
      )
      .then((res) => {
        setNews(res.data.articles);
        // console.log(res.data.artcles);
      });
  };
  return (
    <div className="container">
      {/* <button className="btn  btn-light my-2" onClick={getNews}>
        Fetch News
      </button> */}
      <button
        type="button"
        className="btn btn-sm btn-danger mx-5 my-2"
        onClick={handleLogout}
      >
        Logout
      </button>
      <h3>Top Headlines</h3>
      <div className="row">
        {news.map((value, index) => {
          const title = value.title ? value.title : "";
          const description = value.description
            ? value.description.slice(0, 40)
            : "";
          const urlToImage = !value.urlToImage
            ? "https://www.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg"
            : value.urlToImage;
          return (
            <div className="col-3" key={value.url}>
              <div className="card my-3" style={{ width: "18rem" }}>
                <img
                  src={urlToImage}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "100%", height: "200px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}...</p>
                  <a href={value.url} className="btn btn-primary">
                    {value.source.name}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
