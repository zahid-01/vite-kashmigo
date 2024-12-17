import axios from "axios";
import { useEffect, useState } from "react";
import BASE_URI from "../api";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${BASE_URI}/gallery/images?limit=8`,
    }).then(
      (res) => {
        setGallery(res.data.data);
      },
      () => {}
    );
  }, []);

  return (
    <>
      {gallery.map((el, index) => {
        return (
          <img
            key={index}
            src={el.uri}
            alt="A forest with tall trees and a path"
            width={270}
            height={320}
            className="rounded-lg "
          />
        );
      })}
    </>
  );
};

export default Gallery;
