import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div class="grid grid-cols-3 gap-4 p-12">
        <Link to={"/mathGame"}>
          <div className="h-80 ">
            <img
              src="https://store-images.s-microsoft.com/image/apps.24225.13510798886387592.3bb2fb54-d1db-4092-ba6d-cc10af57a553.3b7e6116-6c63-4bcc-9151-a90ed6742ee3?h=1280"
              alt="math game"
            />
          </div>
        </Link>

        <Link to={"/simmonGame"}>
          <div className="h-80 w-[35rem]">
            <img
              src="https://www.mindgames.com/uploaded/game/screenshot/simonsays800450.webp"
              alt="simmonsays game"
            />
          </div>
        </Link>

        <Link to={"/gamblingGame"}>
          <div className="w-[28rem] h- overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://thumbs.dreamstime.com/b/word-gambling-beautiful-background-letters-331500390.jpg"
              alt="gmabling game"
            />
          </div>
        </Link>

        <Link to={"/communicationGame"}>
          <div className="h-80">
            <img
              className="w-full h-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUW2kRzE5Wsgdh22pR-nP5DDUfXvMR5nqU6Q&s"
              alt="typespeed game"
            />
          </div>
        </Link>

        <Link to={"/typeSpeedGame"}>
        <div className="h-80">
          <img
            src="https://simplyfun.com/cdn/shop/articles/2017_05_01_fde9336c-3d6a-488b-b883-f8e4a1c8f7a9.jpg?v=1738106029"
            alt=""
          />
        </div>
        </Link> 
        <Link to={"/historyGame"}>
        <div className="h-80">
          <img
            src="https://cf.geekdo-images.com/9JQ-Gj4BhA6aW8X03LJugg__opengraph/img/bimlnwexxKX0Rpld3wqaC8w2abA=/0x0:2000x1050/fit-in/1200x630/filters:strip_icc()/pic3742427.jpg"
            alt=""
          />
        </div>
        </Link> 
      </div>
    </>
  );
}
