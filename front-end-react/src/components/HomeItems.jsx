import React from "react";

export default function HomeItems({ urlToImage, title, description }) {
  return (
    <div className="my-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={urlToImage} alt="img" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}
