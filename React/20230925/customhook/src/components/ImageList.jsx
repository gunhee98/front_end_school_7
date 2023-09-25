import React from "react";
import ImageItem from "./ImageItem";
export default function ImageList({ imageList }) {
  return (
    <ul>
      {imageList.map((imgData) => (
        <li key={imgData.id}>
          <ImageItem imgData={imgData} />
        </li>
      ))}
    </ul>
  );
}
