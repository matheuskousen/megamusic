import React from "react";
import { Wrapper } from "./styles";
import Data from "../Database/data";
export default function Playlist({ isSetVideo }) {
  // function handlePlayVideo({isSetVideo}) {
  //   console.log(e.target);
  // }
  return (
    <Wrapper>
      <div className="w-content">
        <ul className="list">
          {Data.map((element) => (
            <li key={element.id} onClick={() => isSetVideo(element.Src)}>
              <div className="thumbnail">
                <img src={element.thumbnail} alt={element.name} />
              </div>
              <div className="scope-text">
                <p>{element.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}
