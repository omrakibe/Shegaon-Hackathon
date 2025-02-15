import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 p-12">
  {[
    { link: "/mathGame", img: "https://static.keygames.com/2/115872/101826/1200x630/math-games-all.webp" },
    { link: "/simmonGame", img: "https://www.mindgames.com/uploaded/game/screenshot/simonsays800450.webp" },
    { link: "/gamblingGame", img: "https://thumbs.dreamstime.com/b/word-gambling-beautiful-background-letters-331500390.jpg" },
    { link: "/communicationGame", img: "https://simplyfun.com/cdn/shop/articles/2017_05_01_fde9336c-3d6a-488b-b883-f8e4a1c8f7a9.jpg?v=1738106029" },
    { link: "/typeSpeedGame", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUW2kRzE5Wsgdh22pR-nP5DDUfXvMR5nqU6Q&s" },
    { link: "/historyGame", img: "https://cf.geekdo-images.com/9JQ-Gj4BhA6aW8X03LJugg__opengraph/img/bimlnwexxKX0Rpld3wqaC8w2abA=/0x0:2000x1050/fit-in/1200x630/filters:strip_icc()/pic3742427.jpg" }
  ].map((game, index) => (
    <Link key={index} to={game.link}>
      <div className="w-full h-80  rounded-xl overflow-hidden">
        <img className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75" src={game.img} alt="Game" />
      </div>
    </Link>
  ))}
</div>

    </>
  );
}
